// Get DOM Elements
let outputElement = document.querySelector('.wkr-example__output')
let resetButton   = document.querySelector('.wkr-example__reset')
let workerButton  = document.querySelector('.wkr-example__worker')
let withoutButton = document.querySelector('.wkr-example__normal')

// Clear Output
resetButton.addEventListener('click', _ => {
  outputElement.innerHTML = 'Give the yellow buttons a whack!'
})

// Run without Web Worker.
withoutButton.addEventListener('click', _ => {
  let result
  for (var i = 0; i < 1e9; i++) result = i
  outputElement.innerHTML = `Done!`
})