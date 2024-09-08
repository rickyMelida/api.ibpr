export class CoverImageDetails {
    constructor(
        public Id: number,
        public Name: string,
        public Picture: Uint8Array,
        public Section: string,
    ) {}
}