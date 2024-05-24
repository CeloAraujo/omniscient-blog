import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
        <Link to={`/`}>Omniscient Blog</Link>   
        </h2>
        <ul>
            <li>
               <Link to={`/omniscient-blog/`}>Home</Link> 
            </li>
            <li>
                <Link to={`/omniscient-blog/new`} className="new-btn">Novo Post</Link>
            </li>
            <li>
                <Link to={`/omniscient-blog/admin`}>Gerenciar</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar