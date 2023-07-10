// Desafio 1
function compareTrue(par1, par2) {
  if (par1 && par2) {
    return true
  }
  else return false
}

// Desafio 2
function calcArea(base, altura) {
  const result = (base * altura) / 2
  return result
}

// Desafio 3
function splitSentence(par1) {
  const result = par1.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  const primeiroItem = array[0];
  const ultimoItem = array[array.length -1]
  const result = ultimoItem + ', ' + primeiroItem
  return result;

}

// Desafio 5
function footballPoints(wins, ties) {
  const winPoints = 3;
  const tiePoints = 1;

  const totalPoints = wins * winPoints + ties * tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
 let count = 0
 const maxNumber = Math.max(...numbers)
 for (i = 0; i < numbers.length; i ++) {
  if (numbers[i] === maxNumber) {
    count = count + 1
  }
}
return count
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2){
  let cat1dist = mouse - cat1;
  let cat2dist = mouse - cat2;
  let rato = mouse;
  if((Math.abs(cat1dist)) < (Math.abs(cat2dist))){
    return 'cat1';
  }else if((Math.abs(cat1dist)) ===(Math.abs(cat2dist))){
    return 'os gatos trombam e o rato foge';
  } else{
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let encodedString = '';
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        encodedString += '1';
        break;
      case 'e':
        encodedString += '2';
        break;
      case 'i':
        encodedString += '3';
        break;
      case 'o':
        encodedString += '4';
        break;
      case 'u':
        encodedString += '5';
        break;
      default:
        encodedString += string[i];
    }
}
return encodedString;
}

function decode(string) {
  let decodedString = '';
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '1':
        decodedString += 'a';
        break;
      case '2':
        decodedString += 'e';
        break;
      case '3':
        decodedString += 'i';
        break;
      case '4':
        decodedString += 'o';
        break;
      case '5':
        decodedString += 'u';
        break;
      default:
        decodedString += string[i];
    }
  }
  return decodedString;
}

// Desafio 10
function techList(tecnologias, nome) {
  let array = []
  if(tecnologias.length === 0) {
    return ('Vazio!');
  }
  let techToString = tecnologias.sort()
  for (let i = 0; i < tecnologias.length; i++) {
    array.push({ tech: tecnologias[i], name: nome})
}
return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
