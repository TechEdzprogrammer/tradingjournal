import styles from '../stylesheets/footer.module.css';

function Footer(){
    return(
    <footer className={styles.footer}>
      <p className={styles.appName}>Cryptotrading Journal</p>
      <p className={styles.subText}>Powered by CMM Journaling Template</p>
    </footer>
    );
}

export default Footer;