import "./index.css";

import StarsIcon from "../../assets/images/stars.png";

function PersonCard({ nameAndAge, city, profilePicture, children }) {
    return (
        <div className="person-card">
            <h5 className="person-name-age">{nameAndAge}</h5>
            <p className="person-city">{city}</p>
            <img className="person-stars" src={StarsIcon} alt="stars" />
            <img className="person-picture" src={profilePicture} alt="profile" />
            <p className="person-text">{children}</p>
        </div>
    );
}

export default PersonCard;