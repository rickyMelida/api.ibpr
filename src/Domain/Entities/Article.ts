class Article {
  constructor(
    public Id: number,
    public Author: string,
    public Text: string,
    public Title: string,
    public IdImage?: string,
    public IdVerse?: number,
    public CreateAt?: Date,
    public IdComment?: number
  ) {}
}

export default Article;