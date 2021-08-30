import SectionTitle from "../SectionTitle";
import PhonesIcon from "../../assets/images/journey_phones.png";

import "./index.css";
import MotivationBlock from "./components/MotivationBlock";

const motivations = [
    {
        motivation: "Each program adapts to your age or fitness level"
    },
    {
        motivation: "Mindful way to exercise and get real results"
    },
    {
        motivation: "Effective and long-term lasting results"
    },
    {
        motivation: "Suited activities that benefit both the mind and body"
    },
    {
        motivation: "Low-intensity but highly-effective workouts"
    },
    {
        motivation: "Extra attention to muscle, joint and back health"
    },
]

function InfoSection() {
    return (
        <section className="info-section">
            <div className="journey-container">
                <SectionTitle>Start your yoga journey now!</SectionTitle>
                <div className="journey-wrapper">
                    <div className="journey-mobile-bg" />
                    <img className="journey-phones" src={PhonesIcon} alt="phones" />
                </div>
            </div>
            <div className="motivation-container">
                <SectionTitle>Is Positive Yoga right for me?</SectionTitle>
                <div className="motivations-block">
                    {motivations.map(({ motivation }, index) => {
                        return <MotivationBlock key={index} motivation={motivation} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default InfoSection;