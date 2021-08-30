import "./index.css";

import DownChevron from "../../../../assets/images/chevron_down.png";
import UpChevron from "../../../../assets/images/chevron_up.png";
import { useState } from "react";

function AskedQuestion({ questionTitle, children }) {
    const [isQuestionOpen, setQuestionState] = useState(false);
    const toggleQuestion = () => {
        setQuestionState(!isQuestionOpen);
    }
    return (
        <div className="asked-question" onClick={toggleQuestion}>
            <div className="title-icon-wrapper">
                <h5 className="question-title">{questionTitle}</h5>
                <img
                    className="chevron-img"
                    src={isQuestionOpen ? UpChevron : DownChevron}
                    alt={isQuestionOpen ? "up-chevron" : "down-chevron"}
                />
            </div>
            {isQuestionOpen ? <p className="question-answer">{children}</p> : null}
        </div>
    );
}

export default AskedQuestion;