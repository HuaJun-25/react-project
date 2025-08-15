import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/news">NEWS</Link></li>
      </ul>   
    </div>
  )
}

export default Nav