import Article from "../../Domain/Entities/Article";
import BlogArticle from "../../Domain/Entities/BlogArticle";

interface IArticleServices {
    GetArticleById(id: number): Promise<Article>;
    GetBlogArticles(): Array<BlogArticle>;
    SetBlogArticle(blogArticle: BlogArticle): Promise<BlogArticle>;
}

export default IArticleServices; 