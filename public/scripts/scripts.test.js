
function calcIMC(peso, altura) {
  
  if (peso <= 0 || altura <= 0) {
    return null;
  }

  const alturaMetros = altura / 100;
  const imc = peso / (alturaMetros * alturaMetros);
  return imc.toFixed(2);

}
 
  // Testes
  describe('calcIMC', () => {
    test('aplicação possui IMC', () => {
      let imc = calcIMC();
      expect(imc)
    })

    test('aplicação retorna o cálculo do imc', () => {

      let imc = calcIMC(70, 175);
      expect(imc).toBe('22.86');

    })
  
    test('aplicação não permite valores nulos', () => {
      imc = calcIMC(-70, 175);
      expect(imc).toBeNull();

    })

  });