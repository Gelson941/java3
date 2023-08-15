// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    // Sua implementação aqui
    
    const { filtrarPares } = require('./highorder');

test('filtrarPares', () => {
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filtrarPares([0, 1, 2, 3, 4, 5])).toEqual([0, 2, 4]);
    expect(filtrarPares([])).toEqual([]);
});

}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    // Sua implementação aqui

    const { somarValores } = require('./highorder');

test('somarValores', () => {
    expect(somarValores([1, 2, 3])).toEqual(6);
    expect(somarValores([-1, 0, 5])).toEqual(4);
    expect(somarValores([])).toEqual(0);
});

}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    // Sua implementação aqui

    const { dobrarNumeros } = require('./highorder');

test('dobrarNumeros', () => {
    expect(dobrarNumeros([1, 2, 3])).toEqual([2, 4, 6]);
    expect(dobrarNumeros([-1, 0, 5])).toEqual([-2, 0, 10]);
    expect(dobrarNumeros([])).toEqual([]);
});

}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};