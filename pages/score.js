import styles from "../styles/score.module.css"
import FeatherIcon from "feather-icons-react";

export default function Score({ my_id,match,no_match,name,score}) {
    return <div className={styles.score}>
        <div className={styles.score__heading}>Your compatibility with {name}</div>

        <div className={styles.upper__circle}>
            <div className={styles.lower__circle}>
                <div className={styles.text}>{score}%</div>
            </div>
        </div>


        <div className={styles.description}>
            <div className={styles.desc__box}>
                <div className={styles.desc__box__heading}>Things you matched on</div>
                <div className={styles.desc__box__desc}>{match}</div>
            </div>
            <div className={styles.desc__box}>
                <div className={styles.desc__box__heading}>Things you didn't match</div>
                <div className={styles.desc__box__desc}>{no_match}</div>
            </div>
        </div>
        <div className={styles.button__box}>
            <button type="button" className={styles.button}>Check all answers <FeatherIcon size={"32px"} icon={"arrow-up-right"}/></button>
            <button type="button" className={styles.button}>Contact <FeatherIcon size={"32px"} icon={"arrow-up-right"}/></button>
        </div>
    </div>
}

Score.getInitialProps = async ({ query }) => {
    const { my_id,match,no_match,name,score } = query
  
    return { my_id,match,no_match,name,score}
  }