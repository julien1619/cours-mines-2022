import axios from "axios";
import Link from "next/link";
import { apiClient } from "../api-client/api-client";
import { BeepModel } from "../types/BeepModel"
import styles from "./Beep.module.css";

type Props = {
    beep: BeepModel;
    setLikedStatus: (beepId: string, liked: boolean) => void
}

export default function Beep(props: Props) {
    const toggleLike = () => {
        if (!props.beep.liked) {
            apiClient.put(`/like/${props.beep.id}`).then(
                () => props.setLikedStatus(props.beep.id, true)
            );
        } else {
            apiClient.put(`/unlike/${props.beep.id}`).then(
                () => props.setLikedStatus(props.beep.id, false)
            );
        }
    }

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
                <button onClick={toggleLike} className="btn">
                    {props.beep.liked ? '❤️' : '🖤'}
                    <span className={styles.likeCount}>{props.beep.likeCount}</span>
                </button>
            </div>
        </div>
    );
}
