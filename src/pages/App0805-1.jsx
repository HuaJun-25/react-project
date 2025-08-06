import '../css/app0805-1.css'

function App() {
    // 一般變數
    const pokemon ="poketa"
    // 類別/屬性名稱變數
    const myClassName="myClass"
    // 方法
    function myClick(){
        alert('我是按鈕2')
    }
    return (
        // return只能單個element
        // <></>這種寫法稱之為Fragment的虛擬元素，不會被渲染出來，也就不會多一層無意義的div */
        <>
            <h1>Hello</h1>
            <div>
                <p style={{color:"red"}} className={myClassName}>姓名:{pokemon}</p>
                <button type="button" onClick={()=>{alert('我是按鈕1')}}>按鈕1</button>
                <button type="button" onClick={myClick}>按鈕2</button>
            </div>
        </>
    )
}
export default App;