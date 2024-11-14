import React from 'React'
import './Student.css'

function Student({data}) {
    
    
        return (
            <div className='icard'>
                <table border={2}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>Roll No</th>
                        </tr>
                        <tr>
                            <td>{data.Name}</td>
                            <td>{data.Branch}</td>
                            <td>{data.Roll_No}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


export default Student