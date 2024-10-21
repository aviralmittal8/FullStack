const c = document.getElementById('bulbs');
let sub = document.getElementById('btn');

sub.addEventListener('click', () => {
    let bulbCount = c.value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 0; i < bulbCount; i++) {
        let wrapperDiv = document.createElement('div');
        wrapperDiv.style.display = 'flex';
        wrapperDiv.style.alignItems = 'center';
        wrapperDiv.style.marginBottom = '10px';

        let img = document.createElement('img');
        img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
        img.alt = "Light bulb image";
        img.style.width = "50px";
        img.style.marginRight = "10px";

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                img.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
            } else {
                img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
            }
        });

        wrapperDiv.appendChild(img);
        wrapperDiv.appendChild(checkbox);
        outputDiv.appendChild(wrapperDiv);
    }
});
