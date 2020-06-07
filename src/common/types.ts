export interface PostState {
  id: string;
  author: string;
  title: string;
  thumbnail: string;
  created: number;
  comments_number: number;
  viewed: boolean;
  dismissed: boolean;
}
