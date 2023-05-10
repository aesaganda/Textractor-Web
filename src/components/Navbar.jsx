import SearchBar from "./SearchBar"
// import Separator from "./Separator"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <>
            <div className="navbar">

                <div className="navbar-left">
                    <div className="navbar-left-logo">
                        {/* <img src="https://i.imgur.com/9QX2XtO.png" alt="logo" /> */}
                        <h1>Logo</h1>
                    </div>
                </div>

                <div className="navbar-link">
                    <div className="nav-link nav-link-active">Home</div>
                    <div className="nav-link">About</div>
                    <div className="nav-link">Contact</div>
                </div>

                <div className="navbar-right">
                    <div className="navbar-right-search">
                        <SearchBar />
                    </div>
                    <div className="navbar-right-profile">

                    </div>

                </div>

                {/* <FontAwesomeIcon icon={faCoffee} size="xs"/> */}
                {/* <Separator hrColor="blue" hrWidth="100%"/> */}
            </div>
        </>
    )
}

export default Navbar

