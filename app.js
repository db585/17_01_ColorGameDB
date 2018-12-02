// El selectors
const squares = document.querySelectorAll('.square')
const colorShow = document.querySelector('#colorShow')
const messageShow = document.querySelector('#message')
const mainHeader = document.querySelector('h1')
const resetBtn = document.querySelector('#reset')
// const easyBtn = document.querySelector('#easy')
// const hardBtn = document.querySelector('#hard')
const modeBtn = document.querySelector('.mode')

// Set init level of difficulty
let diffLevel = 6

// Color Arr set init state
let colors = generateRandomColors(diffLevel)
// [
//   'rgb(255, 0, 0)',
//   'rgb(255, 255, 0)',
//   'rgb(0, 255, 0)',
//   'rgb(0, 255, 255)',
//   'rgb(0, 0, 255)',
//   'rgb(255, 0, 255)'
// ]

// Color picked (color in digits need to be guess in color)
// const pickedColor = colors[5]
let pickedColor = pickColor()

// Add event listener to easyBtn
easyBtn.addEventListener('click', () => {
  // Add/remove class selected
  easyBtn.classList.add('selected')
  hardBtn.classList.remove('selected')

  // Set diff level
  diffLevel = 3

  // Generate new color
  colors = generateRandomColors(diffLevel)

  // Picked and show new color
  pickedColor = pickColor()

  // Paint three first square to color[i] and set last three squares display=none
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // Set initial colors to squares
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
})

// Add event listener to hardBtn
hardBtn.addEventListener('click', () => {
  // Add/remove class selected
  hardBtn.classList.add('selected')
  easyBtn.classList.remove('selected')

  // Set diff level
  diffLevel = 6

  // Generate new color
  colors = generateRandomColors(diffLevel)

  // Picked new color
  pickedColor = pickColor()

  // Paint squares to color[i] and set squares display=block
  for (let i = 0; i < squares.length; i++) {
    // Set initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    squares[i].style.display = 'block'
  }
})

// // show color of square picked
// colorShow.textContent = pickedColor

// Add event listener to restart
resetBtn.addEventListener('click', () => {
  // Change resetBtn text
  resetBtn.textContent = 'New Colors'

  // Empty messageShow
  messageShow.textContent = ''

  // Paint h1 to background
  mainHeader.style.backgroundColor = 'steelblue'

  // Generate new colors
  colors = generateRandomColors(diffLevel)

  // Set new colors to squares
  for (let i = 0; i < squares.length; i++) {
    // Set initial colors to squares
    squares[i].style.backgroundColor = colors[i]
  }

  // Pick new color
  pickedColor = pickColor()

  // // show color of square picked
  // colorShow.textContent = pickedColor
})

for (let i = 0; i < squares.length; i++) {
  // Set initial colors to squares
  squares[i].style.backgroundColor = colors[i]

  // Add event listeners to each square
  squares[i].addEventListener('click', (e) => {
    // Grab color of square picked
    console.log(e.toElement.style.backgroundColor)
    let clickedColor = e.toElement.style.backgroundColor

    // Check clickedColor vs pickedColor
    if (pickedColor === clickedColor) {
      // console.log('Win')
      messageShow.textContent = 'You Win!'

      // Paint all squares and h1 in picked color
      changeColor(clickedColor)

      // Change resetBtn text
      resetBtn.textContent = 'Play Again'
    } else {
      // Paint div to background color
      // console.log('Lost')
      e.toElement.style.backgroundColor = '#232323'
      messageShow.textContent = 'Try again'
    }
  }
  )
}

// function chooseSquare (e) {
//   // console.log(e.toElement.style.backgroundColor)
//   // Show color of square chosen
//   colorShow.textContent = e.toElement.style.backgroundColor
// }

// Change all divs and h1 to one color
function changeColor (color) {
  // Paint h1
  mainHeader.style.backgroundColor = color

  // Paint each div in color
  for (const square of squares) {
    square.style.backgroundColor = color
  }
}

// Pick color from color Arr. Color Arr length could be different
function pickColor () {
  // Pick new rnd color
  let pickedColor = colors[Math.floor(Math.random() * colors.length)]

  // show color of square picked
  colorShow.textContent = pickedColor

  return pickedColor
}

function generateRandomColors (num) {
  const arr = []

  for (let i = 0; i < num; i++) {
    arr[i] = `rgb(${rndNum255()}, ${rndNum255()}, ${rndNum255()})`
    // console.log(arr[i])
  }

  return arr
}

function rndNum255 () {
  return Math.floor(Math.random() * 256)
}
