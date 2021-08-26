import './App.css';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section className="heading-container">
          <p className="plans-ordered">Over <span className="plans-ordered-count">52 147</span> plans ordered.</p>
          <h1 className="heading-title">Get access to your yoga program now!</h1>
        </section>
        <section className="plans-program-container">
          <SectionTitle>Choose your plan and get <span className="free-trial-orange-text">7 days free trial</span></SectionTitle>
        </section>
      </main>
    </div >
  );
}

export default App;
