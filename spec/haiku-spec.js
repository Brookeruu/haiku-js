import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  let haiku;
  let badHaiku;

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

  // it('should test that Haiku has a title', function() {
  //   expect(haiku.title).toEqual("Unicorn");
  //   expect(haiku.author).toEqual("Sara");
  // });


});
