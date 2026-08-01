import styles from './page.module.css'

export default function HandWave(){
    return(
        <span className={styles.wave} aria-hidden="true">👋</span>
    );
}