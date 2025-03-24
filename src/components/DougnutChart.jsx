import {useContext} from 'react'
import { Chart } from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import styles from "../stylesheets/tradingstatus.module.css";
import { JournalContext } from "../context/journalContext";

function DoughnutChart(){
    const {winTrades,loseTrades} = useContext(JournalContext);

    return(
        <div className={styles.winLoseChart}>
                <Doughnut
                    data={{
                        labels: ["Win Trades", "Lose Trades"],
                        datasets:[{
                            data: [winTrades,loseTrades],
                            backgroundColor: ['#3F7D58','#BF3131'],
                            cutout:'50%'
                        }]
                    }}
                   options={{
                    plugins:{
                        title:{
                            display:true,
                            text: "Win and Lose Trades",
                            font:{
                                weight:"bold",
                                size: 40
                            }
                        }
                    }
                   }}
                />
        </div>
    )
}

export default DoughnutChart;