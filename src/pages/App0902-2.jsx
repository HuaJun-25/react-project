import React, { useContext, useState } from 'react'

const App = () => {

    // 建立空的共用區(可以跨元件)
    const Contest = React.createContext();

    // 建立nav選單
    const Nav=()=>{
        return (
            <div className='nav'>
                {/* 按鈕 */}
                <Btn/>
            </div>
        )}
    
    // 建立按鈕
    const Btn = ()=>{
        // 取出登入登出變數
        const [signedIn, setSignedIn,acc, setAcc] = useContext(Contest);

        return (
            <button onClick={()=> setSignedIn(!signedIn)}>
                {signedIn ? '登出' : '登入'}    
            </button>
        )
    }

    const [signedIn, setSignedIn] = useState(false)
    const [acc, setAcc]=useState('') 
    

    const Loginacc = () =>{
        // // 取出共用區的資料
        // const [acc, setAcc] = useContext(Contest);
        return (
            <>
            帳號: <input type="text" value={acc} onChange={(e) => {setAcc(e.target.value)}} />
            </>
        )
    }

  return (
    <>
    <h3>useContext</h3>
    <div>
        <Contest.Provider value={[signedIn, setSignedIn,acc, setAcc]}>
        <Nav />
        
        {/* <h3>singed out</h3> */}
        {/* 帳號: <input className='myInput' type="text" value={acc} onChange={(e) => {setAcc(e.target.value)}} /> */}
        <h2>
            { signedIn ? `sign in ${acc}` : <Loginacc/>}
        </h2>
        </Contest.Provider>
    </div>
    </>
  )
}

export default App