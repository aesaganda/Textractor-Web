// import SearchBar from "./SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <>
            <div className="navbar">

                <div className="navbar-left">
                    <div className="navbar-left-logo">
                        {/* <img src="https://i.imgur.com/9QX2XtO.png" alt="logo" /> */}
                        <h1>Logo</h1>
                    </div>
                    <a className="icon" onClick={changeClassName}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </a>
                </div>
                <div id='myTopnav' className="navbar-right topnav">
                    <div className="nav-link nav-link-active">Home</div>
                    <div className="nav-link">About</div>
                    <div className="nav-link">Contact</div>
                    {/* <div className="navbar-right-search">
                        <SearchBar />
                    </div> */}
                    <div className="navbar-right-profile"></div>
                </div>
            </div>
        </>
    )
}

function changeClassName() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-right topnav") {
      x.className = "navbar-right responsive";
    } else {
      x.className = "navbar-right topnav";
    }
  }
export default Navbar

