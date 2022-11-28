import { Author } from "./Author";

export type Tweet = {
  id: string;
  message: string;
  date: Date;
  likeCount: number;
  retweetCount: number;
  author: Author;
  liked: boolean;
  retweeted: boolean;
};
