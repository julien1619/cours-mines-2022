export type BeepModel = {
    id: string;
    authorId: string;
    createdAt: string;
    content: string;
    likeCount: number;
    liked: boolean;
    author: {
        userId: string;
        username: string;
        picture: string;
    }
}