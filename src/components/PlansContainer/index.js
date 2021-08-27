import "./index.css";

import PlanBlock from '../PlanBlock'
import SectionTitle from '../SectionTitle';
import { useState } from "react";
import Button from "../Button";
import Checkout from "../../assets/images/checkout.png";

function PlansContainer() {
    const [sixMonthsState, setSixMonthsState] = useState(true);
    const [threeMonthsState, setThreeMonthsState] = useState(false);
    const [oneMonthState, setMonthState] = useState(false);

    const clickOnSixMonths = () => {
        setSixMonthsState(true);
        setThreeMonthsState(false);
        setMonthState(false);
    }
    const clickOnThreeMonths = () => {
        setSixMonthsState(false);
        setThreeMonthsState(true);
        setMonthState(false);
    }
    const clickOnOneMonth = () => {
        setSixMonthsState(false);
        setThreeMonthsState(false);
        setMonthState(true);
    }

    return (
        <section className="plans-container">
            <SectionTitle>Choose your plan and get <span className="free-trial-orange-text">7 days free trial</span></SectionTitle>
            <PlanBlock
                onClick={clickOnSixMonths}
                isActive={sixMonthsState}
                planTitle="6 month plan"
                discount={true}
                price="9.99"
                onlyMonth={false}
                monthlyPrice="119.94"
                discountPrice="59.94"
                billedMonths="6"
            >
            </PlanBlock>
            <PlanBlock
                onClick={clickOnThreeMonths}
                isActive={threeMonthsState}
                planTitle="3 month plan"
                discount={false}
                price="14.99"
                onlyMonth={false}
                monthlyPrice="59.97"
                discountPrice="44.97"
                billedMonths="3"
            >
            </PlanBlock>
            <PlanBlock
                onClick={clickOnOneMonth}
                isActive={oneMonthState}
                planTitle="1 month plan"
                discount={false}
                price="9.99"
                onlyMonth={true}
            >
            </PlanBlock>
            <Button onClick={() => alert("Coming soon... 🚀🚀🚀 ")}>Get your plan</Button>
            <div className="terms-wrapper">
                <p className="plan-terms">
                    Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To cancel your subscription, please contact us at least 24 hours before the end of the trial period.
                </p>
                <p className="plan-terms plan-terms-second-p">
                    By choosing a payment method you agree to the <a className="plan-terms-link" href="#">T&Cs</a> and <a className="plan-terms-link" href="#">Privacy Policy</a>
                </p>
                <img src={Checkout} alt="checkout" />
            </div>
        </section>
    );
}

export default PlansContainer;