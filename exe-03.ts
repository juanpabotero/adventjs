// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌

const cartIsValid = (letter: string) => {
  const cleanText = letter.trim();
  const words: String[] = cleanText.split(' ');
  const hasBrackets = words.some((word) => {
    return word.match(/[\[\]\{\}]/);
  });

  if (hasBrackets) return false;

  if (words.some((word) => word.includes('()'))) return false;

  if (cleanText.indexOf('(') > cleanText.indexOf(')')) return false;

  return cleanText.includes('(' && ')');
};

console.log(cartIsValid('(muñeca) consola bici'));
