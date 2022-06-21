import React, { useState } from  'react';
import Count from './CountComponent';
import Title from './Title';
import Button from './ButtonComponent';


function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)

const incrementAge  = () =>{
    setAge(age + 1)
}
const incrementSalary = () =>{
    setSalary (age + 1)
}

return(
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge} children='age'>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary} children='salary'>Increment Salary</Button>
    </div>
)
}


export default ParentComponent;
