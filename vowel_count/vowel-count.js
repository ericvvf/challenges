const vowels = ['a', 'e', 'i', 'o', 'u']

const toLower = word => word.toLowerCase()

const isInArray = (value, arr) => arr.indexOf(toLower(value)) > -1

const strToArray = sentence => Array.from(sentence.trim().replace(" ", ""))

const countVowels = word => strToArray(word).
  filter(letter => isInArray(letter, vowels)).length


export { toLower, isInArray, strToArray, countVowels }
