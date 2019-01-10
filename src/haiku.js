export class Haiku {
  constructor(title, author, line1, line2, line3) {
    const regex = /[\W\d][^a-zA-Z-,'.!?:;]/g
    title.match(regex) ? null : this.title = title;
    author.match(regex) ? null : this.author = author;
    line1.match(regex) ? null : this.line1 = line1;
    line2.match(regex) ? null : this.line2 = line2;
    line3.match(regex) ? null : this.line3 = line3;
  }

  isValidInput() {
    let result = true;

    this.title == null ? result = false : null;
    this.author == null ? result = false : null;
    this.line1 == null ? result = false : null;
    this.line2 == null ? result = false : null;
    this.line3 == null ? result = false : null;

    return result;
  }

  areLinesValid() {
    let syllable = require('syllable');
    let result = true;

    syllable(this.line1) == 5 ? null : result = false;
    syllable(this.line2) == 7 ? null : result = false;
    syllable(this.line3) == 5 ? null : result = false;

    return result;
  }

  generateHaiku() {
    var Sentencer = require('sentencer');

    this.title = Sentencer.make("{{noun}}");
    this.line1= Sentencer.make("What is {{an_adjective }} {{ noun }}");
    this.line2 = Sentencer.make("{{ nouns }} don't seem all that {{ adjective }}");
    this.line3 = Sentencer.make("Who cares about {{nouns}}")
    // this.line2 = `${ noun }s don't seem all that ${ adjective }`;
    // this.line3 = `Who cares about ${ noun }s`;


  }

}
