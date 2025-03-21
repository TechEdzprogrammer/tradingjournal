import styles from '../stylesheets/journalmodal.module.css'
import { useState, useContext, useEffect } from 'react';
import { JournalContext } from '../context/journalContext';

function JournalModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    const { journal, setJournal, setLoseTrades, setWinTrades, winTrades, loseTrades } = useContext(JournalContext);

    const [formData, setFormData] = useState({
        coinName: "",
        strategyUsed: "Strategy Used",
        otherStrategy: "",
        objective: "scalping",
        margin: "",
        pnl: "",
        result: "win",
        learnings: "",
    });

    const [errors, setErrors] = useState({}); 

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    }

    function validateForm() {
        let newErrors = {};

        if (!formData.coinName.trim()) newErrors.coinName = "Coin Pair is required.";
        if (!formData.margin || Number(formData.margin) <= 0) newErrors.margin = "Margin must be a positive number.";
        if (!formData.pnl.trim()) newErrors.pnl = "PNL is required.";
        if (!formData.learnings.trim()) newErrors.learnings = "Learnings field is required.";
        
        if (formData.strategyUsed === "Others" && !formData.otherStrategy.trim()) {
            newErrors.otherStrategy = "Please specify your strategy.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return; 
        setJournal([...journal, formData]);
        formData.result === "lose" ? setLoseTrades(loseTrades + 1) : setWinTrades(winTrades + 1);
        onClose();
    }

    return (
        <>
            <div className={styles.overlay} onClick={onClose}>
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
                                placeholder="e.g BTC/USDT"
                            />
                            {errors.coinName && <p className={styles.error}>{errors.coinName}</p>}
                        </label>

                        <label>
                            Strategy Used:
                            <select name="strategyUsed" value={formData.strategyUsed} onChange={handleChange}>
                                <option value="Strategy Used">Strategy Used</option>
                                <option value="Trend line resistance breakout">Trend line resistance breakout</option>
                                <option value="Bounce play on golden ratios">Bounce play on golden ratios</option>
                                <option value="Trend line support breakdown">Trend line support breakdown</option>
                                <option value="Double top breakdown">Double top breakdown</option>
                                <option value="Others">Others</option>
                            </select>
                            {formData.strategyUsed === "Others" && (
                                <>
                                    <input
                                        type="text"
                                        name="otherStrategy"
                                        value={formData.otherStrategy}
                                        onChange={handleChange}
                                        placeholder="Please indicate your strategy"
                                    />
                                    {errors.otherStrategy && <p className={styles.error}>{errors.otherStrategy}</p>}
                                </>
                            )}
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
                            />
                            {errors.margin && <p className={styles.error}>{errors.margin}</p>}
                        </label>

                        <label>
                            PNL:
                            <input
                                type="number"
                                name="pnl"
                                value={formData.pnl}
                                onChange={handleChange}
                            />
                            {errors.pnl && <p className={styles.error}>{errors.pnl}</p>}
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
                            />
                            {errors.learnings && <p className={styles.error}>{errors.learnings}</p>}
                        </label>

                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default JournalModal;
