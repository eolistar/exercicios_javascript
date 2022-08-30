/** Em ordem: igual, estritamente igual, diferente, estritamente
 * diferente
 */
console.log('01)', '1' == 1) //não considera tipo, apenas valor
console.log('02)', '1' === 1) //considera tipo do dado
console.log('03)', '3' != 3) //não considera tipo
console.log('04)', '3' !== 3) //considera tipo

console.log('05)', 3 < 2)
console.log('05)', 3 > 2)
console.log('05)', 3 <= 2)
console.log('05)', 3 >= 2)

const d1 = new Date(0) // 1 de Janeiro de 1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)