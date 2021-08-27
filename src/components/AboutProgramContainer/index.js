import SectionTitle from "../SectionTitle";
import Program from "./components/Program";
import PlanIcon from "../../assets/images/program_plan.png";
import PersonIcon from "../../assets/images/program_person.png";
import ShoeIcon from "../../assets/images/program_shoe.png";
import AppleIcon from "../../assets/images/program_apple.png";
import WhistleIcon from "../../assets/images/program_whistle.png";
import SmartwatchIcon from "../../assets/images/program_smartwatch.png";
import BookcheckIcon from "../../assets/images/program_bookcheck.png";

import "./index.css";

const programs = [
    {
        icon: PlanIcon,
        programTitle: "A personalized yoga program",
        programDescription: "Completely safe and focused on your key goals"
    },
    {
        icon: PersonIcon,
        programTitle: "Easy & enjoyable yoga workouts for your level",
        programDescription: "Program adjusts to your level and pace"
    },
    {
        icon: ShoeIcon,
        programTitle: "No special preparation needed",
        programDescription: "Perfect for begginners! Requires no special preparation or equipment"
    },
    {
        icon: AppleIcon,
        programTitle: "Daily motivation & accountability",
        programDescription: "Track your progress, develop a healthy routine, reach goals faster"
    },
    {
        icon: WhistleIcon,
        programTitle: "Browse from various yoga challenges",
        programDescription: "30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
    },
    {
        icon: SmartwatchIcon,
        programTitle: "Easy access on any device",
        programDescription: "Do your yoga anywhere across all types of devices"
    },
    {
        icon: BookcheckIcon,
        programTitle: "A complete guide to get started",
        programDescription: "Best tips, guidelines, advice, and recommendations for successful practice"
    },
]

function AboutProgramContainer() {
    return (
        <section className="programs-container">
            <SectionTitle>What's in my program?</SectionTitle>
            <div className="programs">
                {programs.map(({ icon, programTitle, programDescription }, index) => {
                    return <Program key={index} icon={icon} programTitle={programTitle} programDescription={programDescription} />
                })}
            </div>
        </section>
    );
}

export default AboutProgramContainer;