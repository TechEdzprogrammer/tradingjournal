import styles from '../stylesheets/journalmodal.module.css'
import { useState, useContext } from 'react';
import { JournalContext } from '../context/journalContext';
function JournalModal({ isOpen, onClose, children }) {
    
    if (!isOpen) return null;
    const {journal, setJournal} =useContext(JournalContext);

    const [formData, setFormData] = useState({
        coinName: "",
        strategyUsed: "",
        objective: "scalping",
        margin: "",
        pnl: "",
        result: "win",
        learnings: "",
      });
    
      function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      function handleSubmit(e){
        e.preventDefault();
        setJournal([...journal, formData]);
        onClose(); 
      };

    return (
    <>
    <div className={styles.overlay}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <br /><button className={styles.closeBtn} onClick={onClose}>×</button>
            {children}

            <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Coin Pair:
                <input
                type="text"
                name="coinName"
                value={formData.coinName}
                onChange={handleChange}
                required
                placeholder='e.g BTC/USDT'
                />
            </label>

            <label>
                Strategy Used:
                <input
                type="text"
                name="strategyUsed"
                value={formData.strategyUsed}
                onChange={handleChange}
                required
                />
            </label>

            <label>
                Objective:
                <select name="objective" value={formData.objective} onChange={handleChange}>
                <option value="scalping">Scalping</option>
                <option value="intraday trading">Intraday Trading</option>
                <option value="day trading">Day Trading</option>
                <option value="swing trading">Swing Trading</option>
                </select>
            </label>

            <label>
                Margin:
                <input
                type="number"
                name="margin"
                value={formData.margin}
                onChange={handleChange}
                required
                />
            </label>

            <label>
                PNL:
                <input
                type="text"
                name="pnl"
                value={formData.pnl}
                onChange={handleChange}
                required
                />
            </label>

            <label>
                Result:
                <select name="result" value={formData.result} onChange={handleChange}>
                <option value="win">Win</option>
                <option value="lose">Lose</option>
                </select>
            </label>

            <label>
                Learnings:
                <textarea
                name="learnings"
                value={formData.learnings}
                onChange={handleChange}
                rows="3"
                required
                />
            </label>
            <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
        </div>
    </div>
    
    </>
  )
}

export default JournalModal;
