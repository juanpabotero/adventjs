// __*__
// _***_
// *****
// __#__
// __#__

const createXmasTree = (height: number) => {
  if (height <= 0 || height >= 100) return 'Ingrese un numero entre 1 y 100';

  let tree = '';

  const putUnderscores = (initialNumber, finalNumber) => {
    for (let u = initialNumber; u > finalNumber; u--) {
      tree = tree + '_';
    }
  };

  for (let row = 1; row <= height; row++) {
    putUnderscores(height, row);
    tree = tree + '*';
    for (let a = 1; a < row; a++) {
      tree = tree + '**';
    }
    putUnderscores(height, row);
    tree = tree + '\n';
  }

  for (let row = 1; row <= 2; row++) {
    putUnderscores(height, 1);
    tree = tree + '#';
    putUnderscores(height, 1);
    if (row === 1) tree = tree + '\n';
    tree = tree;
  }

  return tree;
};

console.log(createXmasTree(5));
