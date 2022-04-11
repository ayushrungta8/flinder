import styles from "../styles/score.module.css"
import FeatherIcon from "feather-icons-react";

export default function Score() {
    return <div className={styles.score}>
        <div className={styles.score__heading}>Your compatibility with Rohan</div>

        <div className={styles.upper__circle}>
            <div className={styles.lower__circle}>
                <div className={styles.text}>90%</div>
            </div>
        </div>


        <div className={styles.description}>
            <div className={styles.desc__box}>
                <div className={styles.desc__box__heading}>Things you matched on</div>
                <div className={styles.desc__box__desc}>Sleeping habits Pets</div>
            </div>
            <div className={styles.desc__box}>
                <div className={styles.desc__box__heading}>Things you didn't match</div>
                <div className={styles.desc__box__desc}>Cleanliness Eating habits</div>
            </div>
        </div>
        <div className={styles.button__box}>
            <button type="button" className={styles.button}>Check all answers <FeatherIcon size={"32px"} icon={"arrow-up-right"}/></button>
            <button type="button" className={styles.button}>Contact <FeatherIcon size={"32px"} icon={"arrow-up-right"}/></button>
        </div>
    </div>
}