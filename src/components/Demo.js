import React from 'react';

const Demo = (props) =>{
    const {name,age} = props
    function clickHandling()
    {
        console.log('clicked')
    }
    return (
    <div>
        <h1>Hello {props.name} {props.age}</h1>
        <h1>Destructing {name} {age}</h1>
        <button onClick = {clickHandling}>Click</button>
    </div>
    )
}

export default Demo