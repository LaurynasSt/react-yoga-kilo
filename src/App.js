import './App.css';
import AboutProgramContainer from './components/AboutProgramContainer';
import Header from './components/Header';
import PersonCard from './components/PersonCard';
import PlansContainer from './components/PlansContainer';
import SectionTitle from './components/SectionTitle';
import PictureEmily from "./assets/images/person_emily.png";
import PictureKylie from "./assets/images/person_kylie.png";
import PictureJesica from "./assets/images/person_jesica.png";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="heading-container">
          <p className="plans-ordered">Over <span className="plans-ordered-count">52 147</span> plans ordered.</p>
          <h1 className="heading-title">Get access to your yoga program now!</h1>
        </section>
        <section className="plans-program-container">
          <PlansContainer />
          <AboutProgramContainer />
        </section>
        <section className="person-cards-wrapper">
          <SectionTitle>Hear success stories from our clients</SectionTitle>
          <div className="person-cards">
            <PersonCard
              nameAndAge="Emily, 28"
              city="Delaware, NJ"
              profilePicture={PictureEmily}
            >
              I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.
            </PersonCard>
            <PersonCard
              nameAndAge="Kylie, 40"
              city="Los Angeles"
              profilePicture={PictureKylie}
            >
              I will be very straightforward - I hate sports and working out. <span className="positive-yoga">Positive Yoga</span> put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.
            </PersonCard>
            <PersonCard
              nameAndAge="Jesica, 51"
              city="San Francisco, CA"
              profilePicture={PictureJesica}
            >
              I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With <span className="positive-yoga">Positive Yoga</span> program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.
            </PersonCard>
          </div>
        </section>
      </main>
    </div >
  );
}

export default App;
