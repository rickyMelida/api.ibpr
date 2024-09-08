export class Aticle {
  constructor(
    public Id: number,
    public Author: string,
    public Text: Uint8Array,
    public Title: string,
    public IdImage?: string,
    public IdVerse?: number,
    public CreateAt?: Date,
    public IdComment?: number
  ) {}
}
