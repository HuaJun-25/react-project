import Search from '../components/Search.jsx'
import Picture from '../components/Picture.jsx'
import { useEffect, useState } from 'react';
import '../css/App0909-1.css'


const Home = () => {
  const [input, setInput] = useState('') // 文字方塊內容
  const [data, setData] = useState([]) // 資料
  const [page, setPage] = useState(1) // 目前頁數
  const [curSearch, setCurSearch] = useState(''); // 查詢的內容

  // api key
  const auth = 'd6oZOBDWztlumX3h7VnYykN7dKogRCRYjht9ZDzfEzsMf9YWsoU5tvoy';
  // 精選照片連結
  const intialURL = 'https://api.pexels.com/v1/curated?per_page=10&page=1';
  // const intialURL=`https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
  // 關鍵字搜尋
  const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=1`
  // const searchURL=`https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`

  // 取得圖片資料 非同步
  const search = async (url) => {
    setPage(2)
    const dataFetch = await fetch(url, { //連上api
      method: 'GET', //取得資料
      headers: {
        Accept: 'application/json', //json格式
        Authorization: auth, // 認證碼api key
      },
    });

    const photosData = await dataFetch.json(); // 取得資料
    // console.log(photosData)
    setData(photosData.photos)
  }

  const morePic = async() => {
    let newURL;
    if (curSearch == '') {
      newURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`
    }
    // 取資料
    const dataFetch = await fetch(newURL, { //連上api
      method: 'GET', //取得資料
      headers: {
        Accept: 'application/json', //json格式
        Authorization: auth, // 認證碼api key
      },
    });

    const photosData = await dataFetch.json(); // 取得資料
    // 串接陣列資料concat()
    setData(data.concat(photosData.photos))

    setPage(page+1);
  }

  useEffect(() => {
    search(intialURL);
  }, [])

  // curssearch異動後重取得圖片
  useEffect(() => {
    if (curSearch == '') {
      // 沒有關鍵字，執行預設
      search(intialURL);
      // 有關鍵字，關鍵字連結
    } else {
      search(searchURL);
    }
  }, [])

  return (
    <>
      <Search
        // 按鈕將關鍵字帶入searchurl再執行
        search={() => {
          setCurSearch(input)
        }}
        setInput={setInput} />
      <div className='pictures'>
        {
          // 檢查是否有資料
          data &&
          data.map((pic) => {
            return (
              <Picture key={pic.id} data={pic} />
            )
          })
        }
      </div>
      <div className="morepictures">
        <button onClick={morePic}>more</button>
      </div>

    </>
  )
}

export default Home