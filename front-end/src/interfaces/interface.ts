export interface Story {
  name: string;
  src: string;
}

export interface COMMENT {
  cratedAt: Date;
  updatedAt: Date;
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
}