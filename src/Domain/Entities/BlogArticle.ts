import { Image } from "../Common/Image";
import { Verse } from "./Verse";

export class BlogArticle {
    constructor(
        public images: Array<Image>,
        public verses: Array<Verse>,
        public comments: Array<Comment>
    ) {

    }
}