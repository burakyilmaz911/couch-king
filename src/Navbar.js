
const Navbar = () => {

    const eventListener = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active')
    }

    return ( 
        <nav className="navbar">
            <div className="couch-king-title">CouchKing</div>
            <a href="#" className="toggle-button" onClick={eventListener}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;