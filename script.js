let result = document.querySelector(".calc-screen p");
let buttonsBox = document.querySelector(".buttons");
let equally = document.querySelector('.equal')
let clearAllBtn = document.querySelector('.ac')

let nums = []
let znac = []

let numders = ['0','1','2','3','4','5','6','7','8','9']
let operators = ['/','*','-','+']


buttonsBox.addEventListener('click', (e)=>{
    let key = e.target.innerText

    if (numders.includes(key)) {
      nums.push(Number(key))
    } else if (operators.includes(key)) {
      znac.push(key)
    } else {
      return
    }

    if (kay !== '=') {
      if(result.innerText === '0') {
        result.innerText = ''
        result.innerText += kay
      } else {
        result.innerText += kay
      }
    } else {
      return
    }
})

equally.addEventListener('click', ()=>{
        result.innerText = ''
        let a = nums[0]
        let operand = znac[0]
        let b = nums[1]

        let res = 0

        switch(operand) {
            case '+': 
              res = a + b
              break
          
            case '-':
              res = a - b
              break

            case '/':
              res = a / b
              break

            case '*':
              res = a * b
              break
          
            default:
              null
              break
          }

        result.innerText = res
        nums = []
        znac = []
})
clearAllBtn.addEventListener('click', () => {
  result.innerText = 0; //возвращаем ноль на экран
  nums = [];
  znac = [];
});


