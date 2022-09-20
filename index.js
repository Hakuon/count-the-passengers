// document.getElementById("count-el").innerText = 10

// let count = 10

// console.log(count)

// function increment() {
//   console.log("button clicked")
// }

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

// console.log(countEl)

let count = 0

function increment() {
  count = count + 1
  countEl.textContent = count
}

function decrement() {
  count = count - 1
  countEl.textContent = count
}

function save() {
  let previousEt = count + " - "
  saveEl.textContent += previousEt
  count = 0
  countEl.textContent = count
}