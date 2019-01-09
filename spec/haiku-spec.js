import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  let haiku;

  beforeEach(function() {
    haiku = new Haiku("Unicorn", "Sara");

  })

  it('should test that Haiku has a title', function() {
    expect(haiku.title).toEqual("Unicorn");
    expect(haiku.author).toEqual("Sara");
  });

  it('should test that Haiku has 3 lines', function() {
    haiku.line1 = "This";
    haiku.line2 = "These";
    haiku.line3 = "Those";
    expect(haiku.line1).toEqual("This");
    expect(haiku.line2).toEqual("These");
    expect(haiku.line3).toEqual("Those");
  });

});
