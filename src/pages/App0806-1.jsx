import '../css/app0806-1.css'
const App = () => {
    // 資料抽離
    const photos ={
        photo1:{
            imgURL:'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003420_01_PACHIRISUex_SAR_M_M_zh_TW.webp',
            title:'帕奇利茲ex',
            desc:"若這隻寶可夢身上附有「寶可夢道具」，則增加40點傷害。",
            btnName:'Download',
            btnURL:'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003420_01_PACHIRISUex_SAR_M_M_zh_TW.webp'
        },
        photo2:{
            imgURL:'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/ShiningRivalry/cPK_20_005410_01_PIKACHUex_SAR_M_zh_TW_UT.webp',
            title:'皮卡丘ex',
            desc:'將這隻寶可夢身上的能量全部丟棄。',
            btnName:'Download',
            btnURL:'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/ShiningRivalry/cPK_20_005410_01_PIKACHUex_SAR_M_zh_TW_UT.webp'
        },
        photo3:{
            imgURL:'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp',
            title:'夢幻ex',
            desc:'選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。',
            btnName:'Download',
            btnURL:'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp'
        }
    }


    return (
        <>
        <div className="container">
            <div className="card">
                <img src={photos.photo1.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
            </div>
            <div className="card">
                <img src={photos.photo2.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
            </div>
            <div className="card">
                <img src={photos.photo3.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
            </div>
        </div>
        </>
    )
}

export default App;