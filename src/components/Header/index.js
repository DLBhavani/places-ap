import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Tourist Places In Andhara Pradesh</h1>
      <div className="nav-menu">
        <Link className="styling" style={{textDecoration: 'none'}} to="/Amt">
          <p>Amaravathi</p>
        </Link>

        <Link className="styling" style={{textDecoration: 'none'}} to="/Ssm">
          <p>Srisailam</p>
        </Link>

        <Link className="styling" style={{textDecoration: 'none'}} to="/Vij">
          <p>Viyawada</p>
        </Link>

        <Link className="styling" style={{textDecoration: 'none'}} to="/Ttd">
          <p>Tirupati</p>
        </Link>
      </div>
    </div>
    <div>
      <img
        className="img-ap"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Andhra_Pradesh.png/800px-Andhra_Pradesh.png"
        alt="Ap"
      />
    </div>
  </nav>
)

export default Header
