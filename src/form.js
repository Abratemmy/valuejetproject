import React, {useState} from 'react'

function Form() {
    const [people, setPeople ] = useState([
        {name:'tope', age:' 150'},
        {name:'odun', age: '170'},
        {name:'tosin', age: '105'},
        {name:'ini', age: '99'},
        {name:'anu', age: '100'}
    ])
    return (
        <div>
            {people.map((people) =>{
                return(
                    <div className="" key={people.age}>
                        {people.name} <br /> {people.age}

                        babe come here gkl.
                    </div>
                )
            })}
        </div>
    )
}

export default Form
