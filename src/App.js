import { lazy } from 'react';
import './App.css';

const App1 = lazy(() => import('app1/App1'))
function App() {
  return (
    <div className="App">
      <header className="App-header">
       Main app
       <App1/>
      </header>
    </div>
  );
}

export default App;
