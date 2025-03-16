import React from 'react';
import styles from '../stylesheets/journalentry.module.css';
import styleModal from '../stylesheets/journalmodal.module.css'
import { JournalContext } from '../context/journalContext';
import { useContext } from 'react';

function JournalEntryModal({ isOpen, onClose, children, id }) {
  
  if (!isOpen) return null;

  const {journal} = useContext(JournalContext);
  return (
    <>
        <div className={styleModal.overlay}>
            <div className={styleModal.modal}>
            <button onClick={onClose} className='btn btn-dark'>Close X</button>
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
            </div>
        </div>
    </>
  );
}

export default JournalEntryModal;
