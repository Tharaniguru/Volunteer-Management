
import '../assets/CSS/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/services">Services</Link></li>
            <li><Link to ="/fund">Fund</Link></li>
            <li><Link to ="/register">Register</Link></li>
        </ul>
      </nav>
    </div>
  )
}
