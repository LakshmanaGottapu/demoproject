function Header() {
    return (
        <nav style={{ border:'1px solid green', position: 'fixed', top: 0, backgroundColor: '#f8f9fa', padding: '10px', width: '60%', borderRadius: '5px'}}>
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    )
}

export default Header
