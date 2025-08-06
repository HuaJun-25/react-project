import React from 'react'

const Employee = ({ name, age, h, w }) => {
  return (
        <div className="emp">
            <h2>姓名：{name}</h2>
            <p>年齡：{age}</p>
            <p>身高：{h}</p>
            <p>體重：{w}</p>
            <p>BMI：{w/Math.pow(h/100, 2).toFixed(2)}</p>
        </div>
    )
}

export default Employee