const http = require("http");
const fs = require("fs").promises;

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (url === "/register" && method === "POST") {
    let body = "";
    let arr = [];

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      const { name, email, password } = JSON.parse(body);
      console.log(name);
      const fData = await fs.readFile("student.json", "utf-8");
      arr = JSON.parse(fData);
      const result = arr.find((ele) => ele.email === email);

      res.setHeader("Content-Type", "application/json");

      if (result) {
        res.end(
          JSON.stringify({ message: "This is already registered with us" })
        );
      } else {
        arr.push({ name, email, password });
        await fs.writeFile("student.json", JSON.stringify(arr, null, 2));
        res.end(JSON.stringify({ message: "Registration successful" }));
      }
    });
  } else if (url === "/login" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      const { email, password } = JSON.parse(body);
      const fData = await fs.readFile("student.json", "utf-8");
      const arr = JSON.parse(fData);
      const user = arr.find(
        (ele) => ele.email === email && ele.password === password
      );

      res.setHeader("Content-Type", "application/json");

      if (user) {
        res.end(JSON.stringify({ message: "Login successful" }));
      } else {
        res.end(JSON.stringify({ message: "Invalid email or password" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});