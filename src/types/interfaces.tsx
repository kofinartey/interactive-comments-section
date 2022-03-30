export interface UserInterface {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface ReplyInterface {
  content: string;
  createdAt: string;
  id: string | number;
  replyingTo: string;
  score: number;
  user: UserInterface;
}
