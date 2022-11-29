import Link from "next/link";
import { BeepModel } from "../types/BeepModel"
import styles from "./Beep.module.css";

type Props = {
    beep: BeepModel
}

export default function Beep(props: Props) {
    return (
        <div className={`card ${styles.beep}`}>
            <div className="card-body">
                <h5 className={`card-title ${styles.beepTitle}`}>
                    <img className={styles.profilePicture} src={props.beep.author.picture}></img>
                    <span>{props.beep.author.username}</span>
                    <span className={styles.date}>{new Date(props.beep.createdAt).toLocaleString()}</span>
                </h5>
                <p className="card-text">
                    {props.beep.content}
                </p>
            </div>
            <div className="card-footer">
                <span>❤️</span>
                <span className={styles.likeCount}>  {props.beep.likeCount}</span>
            </div>
        </div>
    );
}
