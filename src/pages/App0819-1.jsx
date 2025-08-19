// 子元件

import { Children } from "react"

// 使用props屬性
function MyComponent(props) {
    //props.c();
    return <>
        <div>Hello</div>
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()}
        {/* c是函式後要加() */}
    </>
}
// 子元件
// 簡化: 物件解構=>{物件成員}
function MyComponent2({ a, b, c }) {
    // c();
    return <>
        <div>Hello</div>
        {/* 簡化 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 沒有資料的屬性會是undefined
function MyComponent3({ a, b = "預設值", c }) {
    return <>
        <div>預設</div>
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 次元件
function TwoComponent() {
    return <>
        <p>我是two元件</p>
    </>
}
function TwoComponent2(props) {
    return <>
        <p>TwoComponent2接收到的是:{props.c}</p>
    </>
}

// 子元件
function OneComponent({ children }) {
    return <>
        <h3> 接收主元件的傳遞 </h3>
        {children}
    </>
}

function OneComponent2() {
    return <>
        <h3> 接收主元件的傳遞2 </h3>
        <TwoComponent />
    </>
}

function OneComponent3({ a, children }) {
    return <>
        <h3> 接收主元件的傳遞+屬性 </h3>
        {children}
        <p>我是:{a}</p>
    </>
}

function OneComponent4({a,children}) {
    return <>
        <h3> 接收主元件的傳遞+屬性2</h3>
        <p>我是:{a}</p>
        {children}
    </>
}

function OneComponent5({b}) {
    return <>
        <h3> 接收主元件的傳遞+屬性3</h3>
        <TwoComponent2 c={b}/>
        <p>我是:{b}</p>
    </>
}


// 父元件，主元件
const App = () => {
    return (
        <>
            <MyComponent a="屬性a" b="屬性b" c={() => { console.log("123") }} />
            <MyComponent2 a="屬性a2" b="屬性b2" c={() => { console.log("456") }} />
            <MyComponent3 a="屬性a2" c={() => { console.log("789") }} b="pokeda" />
            <hr />
            <OneComponent>
                <TwoComponent />
            </OneComponent>

            <OneComponent2 />

            <OneComponent3 a="屬性a">
                <TwoComponent />
            </OneComponent3>

            <OneComponent4 a="屬性a">
                <TwoComponent2 c="屬性a" />
            </OneComponent4>

            <OneComponent5 b="屬性b" />
        </>
    )
}

export default App