import Article from "../../Domain/Entities/Article";

interface IActivityRepository {
    GetArticle(Id: number): Promise<Article>;
    GetArticles(): Promise<Array<Article>>;
    GetRecentsArticles(amount: number): Promise<Array<Article>>;
    GetArticlesByTagId(Id: number): Promise<Array<Article>>;
    SetArticle(article: Article): Promise<Article>;
    UpdateArticle(id: number, article: Article): Promise<Article>;
    DeleteArticle(article: Article): Promise<void>;
}

export default IActivityRepository;