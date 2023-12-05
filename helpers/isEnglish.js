export function isNotEnglish(str) {
  const englishAlphabetRegExp = /^[A-Za-z]*$/;
  const containsNonEnglish = (str) => !englishAlphabetRegExp.test(str);
  return containsNonEnglish(str);
}
