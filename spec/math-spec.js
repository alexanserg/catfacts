import { add } from "../src/math.js"

describe('add', function() {
  it('should correctly add two numbers', function() {
    expect(add(2,3)).toEqual(5);
  })
})
