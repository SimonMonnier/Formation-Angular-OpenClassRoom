export class Book {
    photo: string | undefined;
    synopsis: string | undefined;
    constructor(public title: string, public author: string) {
    }
  }