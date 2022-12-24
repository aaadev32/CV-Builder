import './styles/App.css';
import GeneralInfo from './components/GeneralInfo.js'
import EducationalInfo from './components/EducationalInfo.js';
import Experience from './components/Experience.js';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <EducationalInfo />
      <Experience />
    </div>
  );
}

export default App;
