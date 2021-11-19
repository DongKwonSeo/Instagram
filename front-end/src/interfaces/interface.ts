export type Story =
  | {
      id: number;
      name: string;
      src: string;
      checked: boolean;
    }
  | undefined;

export interface COMMENT {
  cratedAt: string;
  updatedAt: string;
  _id: string;
  user_nickname: string;
  comment_text: string;
  content: string;
  id: string;
  replys: [REPLY]| [];
}

export interface PARAM {
  id: string;
}

export interface FEEDITEM {
  id: string;
  user_nickname?: string;
  text: string;
  image: string;
  like: number;
  comments: [COMMENT];
}

export interface REPLY {
  id: string;
  user_nickname: string;
  comment_text: string;
}
