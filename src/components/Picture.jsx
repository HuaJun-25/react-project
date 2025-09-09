
import '../css/App0909-1.css'

const Picture = ({data}) => {
    // console.log(data);
  return (
    
    <div className="picture">
        <p>{data.photographer}</p>
        <div className="imgcontainer">
            <img src={data.src.medium} alt="" />
        </div>
        <p>
            download
            <a href={data.src.medium} target="_black"></a>
        </p>
    </div>
    
  )
}

export default Picture