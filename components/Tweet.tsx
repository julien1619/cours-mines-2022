import { Tweet as TweetModel } from "../types/Tweet";

type Props = {
  tweet: TweetModel;
};

export default function Tweet({ tweet }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{tweet.author.pseudo}</h5>
        <p className="card-text">{tweet.message}</p>
      </div>
    </div>
  );
}
