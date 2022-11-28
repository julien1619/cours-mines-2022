import { BeepModel } from "../types/BeepModel"

type Props = {
    beep: BeepModel
}

export default function Beep(props: Props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.beep.author.username}</h5>
                <p className="card-text">{props.beep.content}</p>
            </div>
        </div>
    );
}
