import Card from '../components/Card';
import '../css/app0806-1.css'

const arrCard = [
    {
        id: 1,
        imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003420_01_PACHIRISUex_SAR_M_M_zh_TW.webp',
        title: '帕奇利茲ex',
        desc: "若這隻寶可夢身上附有「寶可夢道具」，則增加40點傷害。",
        btnName: 'Download',
        btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003420_01_PACHIRISUex_SAR_M_M_zh_TW.webp'

    },
    {
        id: 2,
        imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/ShiningRivalry/cPK_20_005410_01_PIKACHUex_SAR_M_zh_TW_UT.webp',
        title: '皮卡丘ex',
        desc: '將這隻寶可夢身上的能量全部丟棄。',
        btnName: 'Download',
        btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/ShiningRivalry/cPK_20_005410_01_PIKACHUex_SAR_M_zh_TW_UT.webp'

    },
    {
        id: 3,
        imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp',
        title: '夢幻ex',
        desc: '選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。',
        btnName: 'Download',
        btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp'

    },
    {
        id:4,
        imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003480_01_MUMARGIex_SAR_M_M_zh_TW.webp',
        title: '夢妖魔ex',
        desc: '將對手的寶可夢混亂',
        btnName: 'Download',
        btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003480_01_MUMARGIex_SAR_M_M_zh_TW.webp'
    }
]
const App = () => {
    // 資料抽離
    // const photos = {
    //     photo1: {
    //         imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003420_01_PACHIRISUex_SAR_M_M_zh_TW.webp',
    //         title: '帕奇利茲ex',
    //         desc: "若這隻寶可夢身上附有「寶可夢道具」，則增加40點傷害。",
    //         btnName: 'Download',
    //         btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003420_01_PACHIRISUex_SAR_M_M_zh_TW.webp'
    //     },
    //     photo2: {
    //         imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/ShiningRivalry/cPK_20_005410_01_PIKACHUex_SAR_M_zh_TW_UT.webp',
    //         title: '皮卡丘ex',
    //         desc: '將這隻寶可夢身上的能量全部丟棄。',
    //         btnName: 'Download',
    //         btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/ShiningRivalry/cPK_20_005410_01_PIKACHUex_SAR_M_zh_TW_UT.webp'
    //     },
    //     photo3: {
    //         imgURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp',
    //         title: '夢幻ex',
    //         desc: '選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。',
    //         btnName: 'Download',
    //         btnURL: 'https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp'
    //     }
    //}

return (
    <>
        <div className="container">
            {
                arrCard.map((card) => {
                    return <Card
                    key={card.id} /*  */ 
                        imgURL={card.imgURL}
                        title={card.title}
                        desc={card.desc}
                        btnName={card.btnName}
                        btnURL={card.btnURL}
                    ></Card>
                })
            }



        </div>
    </>
)
}

export default App;