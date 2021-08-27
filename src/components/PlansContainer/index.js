import "./index.css";

import PlanBlock from '../PlanBlock'
import SectionTitle from '../SectionTitle';
import { useState } from "react";

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
        <section className="plans-program-container">
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
        </section>
    );
}

export default PlansContainer;