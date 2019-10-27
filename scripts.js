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

// Run with Web Worker
workerButton.addEventListener('click', _ => {
  const worker = document.querySelector('#myWorker').textContent
  const workerData = new Blob([worker], { type: "text/javascript" })
  const myWorker = new Worker(window.URL.createObjectURL(workerData))

  myWorker.addEventListener('message', e => {
    outputElement.innerHTML = e.data
  })

  myWorker.postMessage('')
})