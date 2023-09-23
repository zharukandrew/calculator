let result = document.querySelector(".calc-screen p");
let buttonsBox = document.querySelector(".buttons");
let r = document.querySelector('.equal')

let nums = []
let znac = []

result.innerText = ''

buttonsBox.addEventListener('click', (e)=>{
    let kay = e.target.innerText

    if (Number(kay)) {
        nums.push(kay)
    } else {
        znac.push(kay)
    }

    if (kay !== '==') {
        result.innerText += kay
    }

})

r.addEventListener('click', ()=>{
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

