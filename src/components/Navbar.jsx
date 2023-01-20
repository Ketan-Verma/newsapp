import { Link } from "react-router-dom"
import {FaHome,FaSearch,FaUser} from "react-icons/fa"
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/"><FaHome/></Link></li>
                <li><Link to="/explore"><FaSearch/></Link></li>
                <li><Link to="/about"><FaUser/></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar