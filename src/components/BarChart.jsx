import {useContext} from 'react'
import { Chart } from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import styles from "../stylesheets/tradingstatus.module.css";
import { JournalContext } from "../context/journalContext";

function BarChart() {
    
    const {journal} = useContext(JournalContext);

    return (
        <div className={styles.PNLChart}>
            <Bar
                data={{
                    labels: journal.map((e,) => e.coinName),
                    datasets: [{
                        label: "PNL(USDT)",
                        data: journal.map(e => e.pnl),
                        backgroundColor: journal.map(e => {return e.result == 'win'? '#3F7D58':'#BF3131'}),
                        barThickness: 100
                    }]
                }}
                options={{
                    plugins:{
                        title:{
                            display:true,
                            text: "PNL per Trade",
                            font:{
                                weight:"bold",
                                size: 40
                            }
                        }
                    },
                    scales:{
                        x:{
                            title:{
                                display:true,
                                text: "Coin Pair",
                                font:{
                                    size:20,
                                    weight:"bold"
                                }
                            }
                        },

                        y:{
                            title:{
                                display:true,
                                text: "PNL in USDT",
                                font:{
                                    size:15,
                                    weight:"bold"
                                }
                            }
                        }
                    }
                }}
            />
        </div>
  )
}

export default BarChart;
