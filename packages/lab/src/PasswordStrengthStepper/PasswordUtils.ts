export function getPasswordStrength(
  value: string,
): PasswordStrength | undefined {
  const count = [
    has8OrMoreCharacters,
    hasNumber,
    hasLowerCaseAndUpperCase,
    hasSpecialCharacter,
    hasSeveralSpecialCharacters,
  ].reduce<number>((acc, check) => (check(value) ? (acc += 1) : acc), 0);

  if (count === 1 || count === 2) return 'weak';
  if (count === 3) return 'average';
  if (count >= 4) {
    return value.length > 11 ? 'strong' : 'good';
  }
  return undefined;
}

export function has8OrMoreCharacters(text: string): boolean {
  return text.trim().length > 7;
}

export function hasNumber(text: string): boolean {
  return /(?=.*[0-9])/.test(text);
}

export function hasLowerCaseAndUpperCase(text: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(text);
}

export function hasSpecialCharacter(text: string): boolean {
  return /[!@#$%^&*()_+\-={[}\]|\\;:'"<>?,.]/.test(text);
}

export function hasSeveralSpecialCharacters(text: string): boolean {
  const regex = /[!@#$%^&*()_+\-={[}\]|\\;:'"<>?,.]/g;
  const charactersList = text.match(regex);
  return !!charactersList && charactersList.length > 1;
}

export type PasswordStrength = 'weak' | 'average' | 'good' | 'strong';
