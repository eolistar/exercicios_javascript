const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}/*funcionamento: break interrompe um bloco de código*/

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}/*funcionamento: continue também cria uma acepção baseado na condição
mas a execução continua depois disso. Nesse caso apenas quando y=5
ele não executa, mas continua a execução logo após. */