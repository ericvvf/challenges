import { toLower, isInArray, strToArray, countVowels } from './vowel-count'

describe('Converting to lower case', () => {
  it('Should return a full lower case word', () => {
    expect(toLower('JohN DoE')).toEqual('john doe')
  })
  it('Should return a full lower case word', () => {
    expect(toLower('ERICVIEIRA')).toEqual('ericvieira')
  })
})

describe('Checking if a value is in array', () => {
  it("Should return true given isInArray('A', ['a', 'e', 'i', 'o', 'u'])", () => {
    expect(isInArray('A', ['a', 'e', 'i', 'o', 'u'])).toBeTruthy()
  })
  it("Should return true given isInArray('e', ['a', 'e', 'i', 'o', 'u'])", () => {
    expect(isInArray('e', ['a', 'e', 'i', 'o', 'u'])).toBeTruthy()
  })
  it("Should return false given isInArray('f', ['a', 'e', 'i', 'o', 'u'])", () => {
    expect(isInArray('f', ['a', 'e', 'i', 'o', 'u'])).toBeFalsy()
  })
  it("Should return false given isInArray('z', ['a', 'e', 'i', 'o', 'u'])", () => {
    expect(isInArray('z', ['a', 'e', 'i', 'o', 'u'])).toBeFalsy()
  })
})

describe('Converting a sentence to an array of letters', () => {
  it("Should return ['E', 'r', 'i', 'c'] when strToArray('Eric') ", () => {
    expect(strToArray('Eric')).toEqual(['E', 'r', 'i', 'c'])
  })
  it("Should return ['J', 'o', 'h', 'N'] when strToArray('JohN') ", () => {
    expect(strToArray('JohN')).toEqual(['J', 'o', 'h', 'N'])
  })
  it("Should return ['d', 'o', 'e'] when strToArray(' doe ') ", () => {
    expect(strToArray(' doe ')).toEqual(['d', 'o', 'e'])
  })
  it("Should return ['d', 'o', 'e'] when strToArray('doe ') ", () => {
    expect(strToArray('doe ')).toEqual(['d', 'o', 'e'])
  })
  it("Should return ['d', 'o', 'e'] when strToArray(' doe') ", () => {
    expect(strToArray(' doe')).toEqual(['d', 'o', 'e'])
  })
})

describe('Counting Vowels', () => {
  it("Should return 2 when countVowels('Eric')", () => {
    expect(countVowels('Eric')).toEqual(2)
  })
  it("Should return 6 when countVowels('Eric')", () => {
    expect(countVowels('Eric Vieira')).toEqual(6)
  })
  it("Should return 3 when countVowels('John Doe')", () => {
    expect(countVowels('John Doe')).toEqual(3)
  })
})
