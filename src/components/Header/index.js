import headerIcon from "../../assets/images/header_icon.png";
import headerLogo from "../../assets/images/header_logo.png";
import "./index.css";

function Header() {
    return (
        <header>
            <div className="header-upper">
                <img className="header-icon" src={headerIcon} alt="offer" />
                <h5 className="header-text">50% discount only valid for <span className="header-text-time">00:15:49</span></h5>
            </div>
            <div className="header-bottom">
                <img className="header-logo" src={headerLogo} alt="offer" />
            </div>
        </header>
    );
}

export default Header;