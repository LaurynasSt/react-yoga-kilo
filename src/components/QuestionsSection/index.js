import "./index.css";

import SectionTitle from "../SectionTitle";
import AskedQuestion from "./components/AskedQuestion";
import Button from "../Button";

function AskedQuestions() {
    return (
        <section className="questions-container">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div className="questions-wrapper">
                <AskedQuestion questionTitle="What happens after I order?">
                    After you place your order, we get to work!<br />
                    Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.
                </AskedQuestion>
                <AskedQuestion questionTitle="Where I can access my plan?">
                    Your plan will be accessible in <span className="positive-yoga">Positive Yoga's</span> web app with a special link generated after your purchase.
                </AskedQuestion>
                <AskedQuestion questionTitle="How can I cancel my subscription?">
                    You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app
                </AskedQuestion>
                <AskedQuestion questionTitle="Why this program is paid?">
                    We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!
                </AskedQuestion>
            </div>
            <Button onClick={() => alert("Coming soon... 🚀🚀🚀")}>Get my plan</Button>
        </section>
    );
}

export default AskedQuestions;