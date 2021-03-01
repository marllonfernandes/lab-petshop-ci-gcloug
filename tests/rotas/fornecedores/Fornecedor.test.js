jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')
const fornecedor = new Fornecedor({
    empresa: 'Gatito',
    email: 'contato@gatito.com.br',
    categoria: 'brinquedos'
})

describe('classe Fornecedor', () => {
    test('o metodo validar() retorna true', () => {
        expect(fornecedor.validar()).toBe(true)
    })
    test('o método criar() foi executado com sucesso', async() => {
        try {
            await fornecedor.criar()
        } catch (error) {
            console.log(error)
        }
        expect(fornecedor.id).toBe(500)
        expect(fornecedor.dataCriacao).toBe('10/12/3420')
        expect(fornecedor.dataAtualizacao).toBe('10/12/3420')
        expect(fornecedor.versao).toBe(90)
    })
})