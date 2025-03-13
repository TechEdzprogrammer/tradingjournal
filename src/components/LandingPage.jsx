import React from 'react';
import NavBar from '../subcomponents/NavBar';
import Footer from '../subcomponents/Footer';
import styles from '../stylesheets/landingpage.module.css';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <> 
    <NavBar />
    <div className={styles.landingPage}>
      <div className={styles.content}>
        <h1>Cryptotrading Journal</h1>
        <p>
          Providing you with a user-friendly solution for recording your crypto trading journey, helping you track profits and learn effectively.
        </p>
        <Link to="/cryptoJournal"><button className='btn btn-warning'>Journal Your Trade</button></Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage;
