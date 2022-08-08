export interface IPost {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  createdAt: Date;
  cover: {
    id: number;
    url: string;
  };
}

export class Post implements IPost {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  createdAt: Date;
  cover: {
    id: number;
    url: string;
  };

  constructor(payload: IPost) {
    this.id = payload.id;
    this.title = payload.title;
    this.description = payload.description;
    this.author = payload.author;
    this.category = payload.category;
    this.createdAt = payload.createdAt;
    this.cover = payload.cover;
  }
}
