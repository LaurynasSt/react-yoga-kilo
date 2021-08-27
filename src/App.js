import './App.css';
import AboutProgramContainer from './components/AboutProgramContainer';
import Header from './components/Header';
import PlansContainer from './components/PlansContainer';

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
      </main>
    </div >
  );
}

export default App;
