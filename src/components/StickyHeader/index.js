import "./index.css";
import headerIcon from "../../assets/images/header_icon.png";


function StickyHeader() {
    return (
        <div className="header-sticky">
            <img className="header-icon" src={headerIcon} alt="offer" />
            <h5 className="header-text">50% discount only valid for <span className="header-text-time">00:15:49</span></h5>
        </div>
    );
}

export default StickyHeader;