import React from 'react'
import './Table.css'

function Table({countries}) {
    return (
        <div className="table">
            {countries.map(({country, cases}) =>(

//tr>td*2 make sure Javascript React is enabled
             <tr>
                 <td>{country}</td>
                <td>
                    <strong>
                    {cases}
                    </strong></td>
             </tr>

            ))}
        </div>
    )
}

export default Table
