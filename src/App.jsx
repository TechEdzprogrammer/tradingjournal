import './App.css';
import { Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CryptoJournal from './components/CryptoJournal';
import { JournalContextProvider } from './context/journalContext';

function App() {
  return(
    <>
      <JournalContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} index />;
          <Route path="/cryptoJournal" element={<CryptoJournal/>}/>
          <Route path="/tradingStatus" element={<TradingStatus/>}/>
        </Routes>
      </JournalContextProvider>
    </>
  );
}

export default App;
