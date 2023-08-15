// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui

    const { calcularRetangulo } = require('./objects');

test('calcula o perímetro e a área de um retângulo', () => {
    const retangulo = {
        largura: 5,
        altura: 8,
    };
    
    expect(calcularRetangulo(retangulo)).toEqual({ perimetro: 26, area: 40 });
});

}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqu

    const { ehAdulto } = require('./objects');

test('verifica se uma pessoa é maior de idade', () => {
    const pessoa = {
        nome: 'John',
        idade: 25,
        cidade: 'New York',
    };
    
    expect(ehAdulto(pessoa)).toBe(true);
});

}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui

    const { concatenaValores } = require('./objects');

test('concatena os valores do objeto em uma string', () => {
    const obj = {
        nome: 'Bob',
        idade: 35,
        cidade: 'London',
    };
    
    expect(concatenaValores(obj)).toBe('Bob 35 London');
});

}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
