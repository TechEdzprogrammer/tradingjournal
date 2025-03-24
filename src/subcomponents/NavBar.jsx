import { Link } from "react-router-dom";
import styles from '../stylesheets/navbar.module.css';

function NavBar(){ 
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar " data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={"/"}><p className={`navbar-brand ${styles.brand}`}>CryptoTrading Journal</p></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/cryptoJournal"} className={`navbar-brand ${styles.items}`}><p>Entries</p></Link>
              <Link to={"/tradingStatus"} className={`navbar-brand ${styles.items}`}><p>Stats</p></Link>
            </div>
          </div>
        </div>
      </nav>
    );

    
}

export default NavBar;