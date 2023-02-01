let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log("save-el")

function increment() {
    count +=  1
    countEl.innerText = count
}




function save() {
      let countStr = count + " - "

      saveEL.textContent += countStr
      countEl.textContent = 0
      count = 0
      
    console.log(count)
}

