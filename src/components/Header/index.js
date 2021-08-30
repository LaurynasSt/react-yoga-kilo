import headerLogo from "../../assets/images/header_logo.png";
import "./index.css";

function Header() {
    return (
        <header>
            <div className="header">
                <img className="header-logo" src={headerLogo} alt="offer" />
            </div>
        </header>
    );
}

export default Header;