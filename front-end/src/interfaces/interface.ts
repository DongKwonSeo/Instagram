import { ReactNode } from "react";

export type Story =
  | {
      id: number;
      name: string;
      src: string;
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
  children?: ReactNode;
}
