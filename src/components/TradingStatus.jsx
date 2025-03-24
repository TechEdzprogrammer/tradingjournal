import NavBar from '../subcomponents/NavBar';
import styles from "../stylesheets/tradingstatus.module.css";
import BarChart from './BarChart';
import DoughnutChart from './DougnutChart';

function TradingStatus() {
    
    return (
    <>
        <NavBar/>
        <section className={styles.container}>
            <BarChart/>
            <DoughnutChart/>
        </section>
        
    </>
  )
}

export default TradingStatus;
