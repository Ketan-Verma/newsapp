import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
        <ul>
            <li className="active"><Link >Top News</Link></li>
            <li><Link>Local</Link></li>
            <li><Link>World</Link></li>
            <li><Link>Entertainment</Link></li>
            <li><Link>Sports</Link></li>
            <li><Link>Business</Link></li>
            <li><Link>Tech</Link></li>
            <li><Link>Auto</Link></li>
            <li><Link>Education</Link></li>
            <li><Link>Science</Link></li>
            <li><Link>Politics</Link></li>
        </ul>
    </div>
  )
}

export default Header