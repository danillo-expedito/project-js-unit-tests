/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/  

const average = (parameter) => {
  let sum = 0;
  let media = 0;
const size = parameter.length;
for (let index of parameter) {
  if (typeof index === 'number') {
    sum += index;
  } else {
    return undefined;
  }
}
if (size !== 0) {
  media = sum / size;
  return Math.round(media);
}
  return undefined;
};

module.exports = average;

console.log(average([3, 4, '5', 24]));
