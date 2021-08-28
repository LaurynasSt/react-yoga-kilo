import "./index.css";

import CheckCircle from "../../../../assets/images/check_circle.png";

function MotivationBlock({ motivation }) {
    return (
        <div className="motivation-block">
            <img className="checkcircle" src={CheckCircle} alt="positive" />
            <p className="motivation-text">{motivation}</p>
        </div>
    );
}

export default MotivationBlock;