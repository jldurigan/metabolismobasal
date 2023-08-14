const { calcIMC, calcTMB } = require('../../public/scripts/scripts.cjs')

// Testes
describe('calcIMC', () => {
  test('aplicação possui IMC', () => {
    const imc = calcIMC()
    expect(imc)
  })

  test('aplicação retorna o cálculo do imc', () => {
    const imc = calcIMC(70, 175)
    expect(imc).toBe('22.86')
  })

  test('aplicação não permite valores nulos', () => {
    const imc = calcIMC(-70, 175)
    expect(imc).toBeNull()
  })
  test('aplicação não permite valores nulos 2', () => {
    const tmb = calcTMB(70,21,171,'Masculino')
    expect(tmb.ativo).toBe(1668.75)
  })
})
