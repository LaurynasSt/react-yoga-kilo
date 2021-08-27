import "./index.css";

function PlanDescription({ monthlyPrice, discountPrice, billedMonths }) {
    return (
        <p className="plan-description"><span className="price-monthly">${monthlyPrice}</span> <span className="price-discount">${discountPrice}</span> <span>billed every {billedMonths} months</span>
        </p>
    );
}

export default PlanDescription;