import {
  containsLowerAndUpperCaseLetters,
  containsSpecialCharacters,
} from '../src'

describe('containsLowerAndUpperCaseLetters', () => {
  describe('contains non-letter characters', () => {
    it('no uppercase', () => {
      const r = containsLowerAndUpperCaseLetters('äöa?=s22')
      expect(r).toBe(false)
    })
    it('no lowercase', () => {
      const r = containsLowerAndUpperCaseLetters('ÄÖA?=S22')
      expect(r).toBe(false)
    })
    it('uppercase and lowercase', () => {
      const r = containsLowerAndUpperCaseLetters('äÄöÖa?=S22')
      expect(r).toBe(true)
    })
  })

  describe('contains only letters', () => {
    it('no uppercase', () => {
      const r = containsLowerAndUpperCaseLetters('äöas')
      expect(r).toBe(false)
    })
    it('no lowercase', () => {
      const r = containsLowerAndUpperCaseLetters('ÄÖAS')
      expect(r).toBe(false)
    })
    it('uppercase and lowercase', () => {
      const r = containsLowerAndUpperCaseLetters('äÄöÖaS')
      expect(r).toBe(true)
    })
  })
})

describe('containsSpecialCharacters', () => {
  it('check some special characters', () => {
    const specialCharacters = '!"#¤%&/()=?+-.;:,@£${[]}\\§'.split('')
    const result = specialCharacters.map(containsSpecialCharacters)
    expect(result).toStrictEqual(new Array(specialCharacters.length).fill(true))
  })
  it('common characters', () => {
    const r = containsSpecialCharacters('abcABC123ÄÖÅäöå')
    expect(r).toBe(false)
  })
})
