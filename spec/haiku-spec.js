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

  // it('should test that Haiku has 3 lines', function() {
  //   var haiku = new Haiku();
  //   expect(haiku.line1).toEqual(true);
  //   expect(haiku.line2).toEqual(true);
  //   expect(haiku.line3).toEqual(true);
  // });

});
