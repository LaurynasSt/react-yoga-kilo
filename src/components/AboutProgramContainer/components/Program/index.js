import "./index.css";

function Program({ icon, programTitle, programDescription, altText }) {
    return (
        <div className="program">
            <img className="program-icon" src={icon} alt={altText} />
            <div>
                <h5 className="program-title">{programTitle}</h5>
                <p className="program-description">{programDescription}</p>
            </div>
        </div>
    );
}

export default Program;
