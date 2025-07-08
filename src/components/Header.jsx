import { Link } from "react-router-dom"
function Header() {
    return (
        <nav style={{ border:'1px solid green', position: 'fixed', top: 0, backgroundColor: '#f8f9fa', padding: '10px', width: '60%', borderRadius: '5px'}}>
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Header
