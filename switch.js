// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    // Sua implementação aqui

    const { retornaDiaSemana } = require('./switch');

test('dia da semana correspondente ao número 1', () => {
    expect(retornaDiaSemana(1)).toBe('Domingo');
});

test('dia da semana correspondente ao número 4', () => {
    expect(retornaDiaSemana(4)).toBe('Quarta-feira');
});

test('dia da semana correspondente ao número 9 (inválido)', () => {
    expect(retornaDiaSemana(9)).toBe('Número inválido');
});

}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui

    const { retornaPrecoProduto } = require('./switch');

test('preço do produto com código "A"', () => {
    expect(retornaPrecoProduto('A')).toBe(10.99);
});

test('preço do produto com código "B"', () => {
    expect(retornaPrecoProduto('B')).toBe(5.99);
});

test('preço do produto com código "D" (inválido)', () => {
    expect(retornaPrecoProduto('D')).toBe('Código inválido');
});

}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui

    const { retornaCategoriaProduto } = require('./switch');

test('categoria do tipo de produto "Eletrônicos"', () => {
    expect(retornaCategoriaProduto('Eletrônicos')).toBe('Tecnologia');
});

}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };