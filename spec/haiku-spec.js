import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  let haiku;
  let badHaiku;
  let anotherHaiku;
  let syllable = require('syllable');

  beforeEach(function() {
    haiku = new Haiku(
              "Unicorn",
              "Sara",
              "This",
              "These",
              "Those"
            );

    badHaiku = new Haiku(
                  "Ke5ha",
                  "K35ha",
                  "This",
                  "These",
                  "Those"
    );

    anotherHaiku = new Haiku(
                  "Elk",
                  "Dragon",
                  "Papaya Mango",
                  "Papaya juice and mango",
                  "Pineapple Guava"
    );

  })

  it('should test that Haiku has all properties', function() {
    expect(haiku.title).toEqual("Unicorn");
    expect(haiku.author).toEqual("Sara");
    expect(haiku.line1).toEqual("This");
    expect(haiku.line2).toEqual("These");
    expect(haiku.line3).toEqual("Those");
  });

  it('should test that Haiku properties only include letters and punctuation.', function() {
    expect(badHaiku.isValidInput()).toEqual(false);
    expect(haiku.isValidInput()).toEqual(true);
    expect(haiku.isValidInput()).not.toEqual(false);

  });

  it('should count the syllables in a string ', function() {
    expect(syllable(haiku.line1)).toEqual(1);
    expect(syllable(haiku.line1)==3).toEqual(false);
  });

  it('should count the syllables in a string of multiple words', function() {
    expect(syllable(anotherHaiku.line1)).not.toEqual(4);
    expect(syllable(anotherHaiku.line2)).toEqual(7);
    expect(syllable(anotherHaiku.line1)).toEqual(5);
  });

  it('should verify correct number of syllables in each line' , function() {
    expect(badHaiku.areLinesValid()).toEqual(false);
    expect(anotherHaiku.areLinesValid()).toEqual(true);
  });

  it('should generate a line with a given number of syllables' , function() {
    expect(anotherHaiku.areLinesValid()).toEqual(true);
  });


});
