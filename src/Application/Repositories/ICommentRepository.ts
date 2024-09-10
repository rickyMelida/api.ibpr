interface ICommentRepository {
    GetComment(Id: number): Promise<Comment>;
    GetCommentsByArticleId(Id: number): Promise<Array<Comment>>;
    SetComment(comment: Comment): Promise<Comment>;
    UpdateComment(comment: Comment): Promise<Comment>;
    DeleteComment(comment: Comment): Promise<void>;
}
