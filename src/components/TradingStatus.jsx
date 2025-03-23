import React, { useContext } from 'react';
import NavBar from '../subcomponents/NavBar';
import {Bar, Doughnut} from 'react-chartjs-2';
import styles from "../stylesheets/tradingstatus.module.css";
import { JournalContext } from "../context/journalContext";


function TradingStatus() {
    
    const {journal,winTrades,loseTrades} = useContext(JournalContext);

    return (
    <>
        <NavBar/>
        <section className={styles.container}>
            <div className={styles.PNLChart}>
                <Bar
                    data={{
                        labels: journal.map((e,) => e.coinName),
                        datasets: [{
                            label: "PNL(USDT)",
                            data: journal.map(e => e.pnl)
                        }]
                    }}
                    options={{
                        plugins:{
                            title:{
                                display:true,
                                text: "PNL per Trade",
                                font:{
                                    weight:"bold",
                                    size: 20
                                }
                            }
                        }
                    }}
                />

            </div>
            <div className={styles.winLoseChart}>
                <Doughnut
                    data={{
                        labels: ["Win Trades", "Lose Trades"],
                        datasets:[{
                            data: [winTrades,loseTrades]
                        }]
                    }}
                   options={{
                    plugins:{
                        title:{
                            display:true,
                            text: "Win and Lose Trades",
                            font:{
                                weight:"bold",
                                size: 20
                            }
                        }
                    }
                   }}
                />
            </div>
        </section>
    </>
  )
}

export default TradingStatus;
