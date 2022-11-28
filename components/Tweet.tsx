import { Tweet } from "../types/Tweet";

type Props = {
  tweet: Tweet;
};

export default function Tweet({ tweet }: Props) {
  return <div>{tweet.message}</div>;
}
