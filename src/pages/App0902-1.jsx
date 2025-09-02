import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const App = () => {

    // 表格資料
    const arrProd = [
        {
            id: 1,
            prodName: '胖可丁',
            prodPrice: 140,
            prodImg: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/GeneticApex/GeneticApex_30_00195.webp'
        },
        {
            id: 2,
            prodName: '夢幻',
            prodPrice: 80,
            prodImg: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp'
        },
        {
            id: 3,
            prodName: '夢妖魔',
            prodPrice: 140,
            prodImg: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003480_01_MUMARGIex_SAR_M_M_zh_TW.webp'
        },
        {
            id: 4,
            prodName: '冰伊布',
            prodPrice: 80,
            prodImg: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/TriumphantLight/cPK_20_004460_01_GLACIAex_SAR_M_zh_TW_UT.webp'
        }, {
            id: 5,
            prodName: '達克萊伊',
            prodPrice: 200,
            prodImg: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003910_01_DARKRAIex_SAR_M_M_zh_TW.webp'
        },
    ]

    //  表格元件
    const ProdTable = ({ascfilterProds}) => {
        return (
            <table style={{ width: '500px', maaginTop: '20px' }}>
                <tbody>
                    {ascfilterProds.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td style={{ borderBottom: '1px dashed #222', padding: '5px', width: '100px' }} >{item.prodName}</td>
                                <td style={{ borderBottom: '1px dashed #222', padding: '5px', width: '300px' }}>
                                    <img src={item.prodImg} alt=""
                                        style={{
                                            width: '100px'
                                        }} /> </td>
                                <td style={{ borderBottom: '1px dashed #222', padding: '5px', width: '100px' }}>{item.prodPrice}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    // 陣列排序
    const [prods, setProds]=useState(arrProd)

    const [ascending, setAscending]=useState(true) // 排序變數，預設為遞增
    const [search, setSearch]=useState('') // 搜尋變數，預設為''
    
    // 建立排序與搜尋的函式
    const ascfilterProds = useMemo(()=>{
        // 排序
        return[...prods]
        .sort((a, b)=>{
            return ascending ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice
        })

        // 搜尋
        .filter((prod)=>{
            // 保留關鍵字內容
            return prod.prodName.match(search)  
        })
    },[ascending, search]) // 排序有異動時陣列拿出來再做一次排序



    return (
        <>
            <div>
                <h3>usememo</h3>
            </div>
            <div className="wrap">
                排序
                <input type="checkbox" 
                // 綁定排序變數
                checked={ascending}
                // 當排序內容有異動時更新排序變數
                onChange={(e)=>{setAscending(e.target.checked)}} />
                <br />
                搜尋
                <input type="text" 
                // 綁定搜搜尋變數
                value={search}
                // 當搜尋內容有異動時更新搜尋變數
                onChange={(e)=>{setSearch(e.target.value)}} />

                {/* 表格 */}
                <div>
                    <span style={{ display:'inline-block', borderBottom: '1px dashed #222', padding: '5px', width: '100px' }}>產品名稱</span>
                    <span style={{ display:'inline-block', borderBottom: '1px dashed #222', padding: '5px', width: '270px' }}>產品圖</span>
                    <span style={{ display:'inline-block', borderBottom: '1px dashed #222', padding: '5px', width: '100px' }}>價格</span>
                <ProdTable ascfilterProds={ascfilterProds} />
                </div>


            </div>
        </>
    )
}

export default App