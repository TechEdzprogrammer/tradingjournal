import { useContext, useState, useEffect } from "react";
import NavBar from '../subcomponents/NavBar';
import styles from "../stylesheets/cryptojournal.module.css";
import JournalModal from "./JournalModal";
import { JournalContext } from "../context/journalContext";
import JournalEntryModal from "./JournalEntryModal";


function CryptoJournal() {
    
    const [modal, setModal] = useState(false);
    const {journal , setJournal, winTrades, setWinTrades, loseTrades, setLoseTrades} = useContext(JournalContext);
    const [journalEntryModal, setJournalEntryModal] = useState(false);
    const [journalID, setJournalID] = useState();

    function renderForm(){
        setModal(true);
    }

    function renderJournalEntry(index){
        setJournalEntryModal(true);
        setJournalID(index);
    }

    function deleteEntry(ind, result){
        setJournal(journal.filter((e, index) => index !== ind));
        if(result === "win"){
            setWinTrades(winTrades - 1);
        }
        else{
            setLoseTrades(loseTrades - 1);
        }
    }
    
    return (
    <>
        <NavBar/>
        <div className={styles.container}>
            <div className={styles.btncontainer}>
                <button onClick={renderForm} className={`btn btn-warning ${styles.addjournal}`}>Add a journal</button>
                <div className={styles.win}>Winning Trades: {winTrades}</div>
                <div className={styles.lose}>Losing Trades: {loseTrades}</div>
            </div>
            <section className={styles.subContainer}>
                {journal.map((e,index) => {
                    return(
                        <div key={index} className={e.result === "win" ? styles.journalContainerGreen:styles.journalContainerRed}>
                            <div className={styles.coinName}>
                                <p>{e.coinName}</p>
                            </div>
                            <div className={styles.pnl}>
                                <p>PNL: {e.pnl}usdt</p>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={() => renderJournalEntry(index)} className="btn btn-dark">View Journal</button>
                                <button className="btn btn-warning" onClick={() => deleteEntry(index, e.result)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </section>
            <JournalModal isOpen={modal} onClose={() => setModal(false)}>
                <h2>Journal Your Trade</h2>
            </JournalModal>

            <JournalEntryModal isOpen={journalEntryModal} onClose={() => setJournalEntryModal(false)} id={journalID}>
                <h2>Journal Entry</h2>
            </JournalEntryModal>
        </div>
    </>
  )
}


export default CryptoJournal;
