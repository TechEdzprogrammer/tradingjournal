import { useContext, useState } from "react";
import NavBar from '../subcomponents/NavBar';
import styles from "../stylesheets/cryptojournal.module.css";
import JournalModal from "./JournalModal";
import { JournalContext } from "../context/journalContext";
import { Link } from "react-router-dom";
import Footer from "../subcomponents/Footer";

function CryptoJournal() {
    
    const [modal, setModal] = useState(false);
    const {journal , setJournal} = useContext(JournalContext);

    function renderForm(){
        setModal(true);
    }

    return (
    <>
        <NavBar/>
        <div className={styles.container}>
            <div className={styles.btncontainer}>
                <button onClick={renderForm} className={styles.addjournal}>Add a journal</button>
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
                                <Link to={`/journalentry/${index}`}><button className="btn btn-dark">View Journal</button></Link>
                                <button className="btn btn-warning" onClick={() =>{
                                    setJournal(journal.filter((e, ind) => ind !== index));
                                }}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </section>
            <JournalModal isOpen={modal} onClose={() => setModal(false)}>
                <h2>Journal Your Trade</h2>
            </JournalModal>
            <Footer/>
        </div>
    </>
  )
}


export default CryptoJournal;
