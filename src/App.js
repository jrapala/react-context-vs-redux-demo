import './App.css';
import AppProvider from './AppProvider';
import AppGrid from './components/AppGrid';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <AppGrid />
      </div>
    </AppProvider>
  );
}

export default App;
