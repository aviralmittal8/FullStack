import React from 'React'
import Student from './Student'


function App() {
  let a = 12
  const mystyle = {
    backgroundColor:'red',
    color:'cyan'
  }
  const data = {Name: "Aviral Mittal",Branch: "CSE", Roll_No:"45"};
  return (
    <div>
        <div style={mystyle}>ABES engineering College</div>
        <div style={mystyle}>{a}</div>
     <Student data={data} />
    </div>

  )
}

export default App