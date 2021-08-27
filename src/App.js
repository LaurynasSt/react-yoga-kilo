import './App.css';
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
        <PlansContainer />
      </main>
    </div >
  );
}

export default App;
