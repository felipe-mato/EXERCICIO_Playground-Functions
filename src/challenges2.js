// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  const count = {};
  
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    
    count[number] = (count[number] || 0) + 1;
    
    if (count[number] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  
  const phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return phoneNumber;
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const sumAB = lineA + lineB;
  const sumAC = lineA + lineC;
  const sumBC = lineB + lineC;

  const absDiffAB = Math.abs(lineA - lineB);
  const absDiffAC = Math.abs(lineA - lineC);
  const absDiffBC = Math.abs(lineB - lineC);

  const isTriangle = lineA < sumBC && lineB < sumAC && lineC < sumAB &&
                  lineA > absDiffBC && lineB > absDiffAC && lineC > absDiffAB;

  return isTriangle;
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g);
  let cont = 0;
  for (let index in numbers) {
    cont += parseInt(numbers[index], 10);
  }
  if (cont === 1) {
    return '1 copo de água';
  }
  return `${cont} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
