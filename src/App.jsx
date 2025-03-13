import './App.css';
import { Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CryptoJournal from './components/CryptoJournal';
import { JournalContextProvider } from './context/journalContext';
import JournalEntry from './components/JournalEntry';

function App() {
  return(
    <>
      <JournalContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} index />;
          <Route path="/cryptoJournal" element={<CryptoJournal/>}/>
          <Route path="/journalentry/:id" element={<JournalEntry/>}/>
        </Routes>
      </JournalContextProvider>
    </>
  );
}

export default App;
