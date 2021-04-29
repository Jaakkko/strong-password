import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

export function containsLowerAndUpperCaseLetters(password: string): boolean {
  let lower = false
  let upper = false
  for (const char of password) {
    const isLetter = char.toLowerCase() !== char.toUpperCase()
    if (!isLetter) {
      continue
    }

    lower = lower || char === char.toLowerCase()
    upper = upper || char === char.toUpperCase()
    if (lower && upper) {
      return true
    }
  }

  return false
}

export function containsSpecialCharacters(password: string): boolean {
  for (const char of password) {
    const isNumber = '0' <= char && char <= '9'
    const isLetter = char.toLowerCase() !== char.toUpperCase()
    if (!isNumber && !isLetter) {
      return true
    }
  }
  return false
}
