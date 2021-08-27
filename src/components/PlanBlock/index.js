import PlanDescription from "./components/PlanDescription";
import ActiveIcon from "../../assets/images/plan_active.png"
import NotActiveIcon from "../../assets/images/plan_not_active.png"
import "./index.css";

function PlanBlock({ onClick, planTitle, price, discount, isActive, onlyMonth, monthlyPrice, discountPrice, billedMonths }) {
    return (
        <div onClick={onClick} className={!isActive ? "plan-block" : "plan-block-active"}>
            <img src={isActive ? ActiveIcon : NotActiveIcon} alt="checkbox"></img>
            <h5 className="plan-title">{planTitle} {discount ? <span className="plan-discount">Save 50%</span> : null} </h5>
            <h2 className="plan-price">${price}<span className="price-month">/ month</span></h2>
            {onlyMonth ? <p className="plan-description">Billed monthly</p>
                :
                <PlanDescription monthlyPrice={monthlyPrice} discountPrice={discountPrice} billedMonths={billedMonths}>
                </PlanDescription>}
        </div>
    )
}

export default PlanBlock;