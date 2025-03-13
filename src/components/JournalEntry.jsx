import styles from '../stylesheets/journalentry.module.css';
import { JournalContext } from '../context/journalContext';
import { useContext } from 'react';
import NavBar from '../subcomponents/NavBar';
import Footer from '../subcomponents/Footer';
import { useParams } from 'react-router-dom';

function JournalEntry() {
  const {journal} = useContext(JournalContext);
  const {id} = useParams();
  
  return(
    <>
        <NavBar/>
        <div className={styles.entryContainer}>
          <div className={styles.journalDetails}>
            <h3 className={styles.heading}>Coin Pair: {journal[id].coinName}</h3>
            <p><strong>Trading Strategy</strong>: {journal[id].strategyUsed}</p>
            <p><strong>Objective</strong>: {journal[id].objective}</p>
            <p><strong>Margin</strong>: {journal[id].margin}usdt</p>
            <p><strong>PNL</strong>: {journal[id].pnl}usdt</p>
            <p><strong>Result</strong>: {journal[id].result}</p>
            <p><strong>Learnings Gained</strong>: {journal[id].learnings}</p>
          </div>
        </div>
        <Footer/>
    </>
  );  
    
  
}

export default JournalEntry;
