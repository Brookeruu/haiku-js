export class Haiku {
  constructor(title, author, line1, line2, line3) {
    title.match(/[0-9]/gm) ? null : this.title = title;
    author.match(/[0-9]/gm) ? null : this.author = author;
    line1.match(/[0-9]/gm) ? null : this.line1 = line1;
    line2.match(/[0-9]/gm) ? null : this.line2 = line2;
    line3.match(/[0-9]/gm) ? null : this.line3 = line3;
  }

  validInput() {
    let result = true;

    this.title == null ? result = false: null;
    this.author == null ? result = false: null;
    this.line1 == null ? result = false: null;
    this.line2 == null ? result = false: null;
    this.line3 == null ? result = false: null;

    return result;
  }

}
