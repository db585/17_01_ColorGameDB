// El selectors
const squares = document.querySelectorAll('.square')
const colorShow = document.querySelector('#colorShow')
const messageShow = document.querySelector('#message')
const mainHeader = document.querySelector('h1')
const resetBtn = document.querySelector('#reset')
// const easyBtn = document.querySelector('#easy')
// const hardBtn = document.querySelector('#hard')
const modeBtns = document.querySelectorAll('.mode')

// Set init level of difficulty
let diffLevel = 6
// Color Arr - arr of color in rbg format
let colors
// Rnd color picked from color arr
let pickedColor

// Set initial state
reset()

// Add event listeners for each modeBtn
modeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Remove class selected from all buttons
    modeBtns.forEach(btnTemp => {
      btnTemp.classList.remove('selected')
    })

    // Set class selected to clicked button
    btn.classList.add('selected')

    // Set diffLevel depends on btn clicked

    if (btn.textContent === 'Easy') {
      diffLevel = 3
    } else {
      diffLevel = 6
    }

    reset()
  })
})

// Add event listener to resetBtn
resetBtn.addEventListener('click', () => {
  reset()
})

// Paint squares and add event listeners to each square with logic
for (let i = 0; i < squares.length; i++) {
  // Set initial colors to squares
  squares[i].style.backgroundColor = colors[i]

  // Add event listeners to each square
  squares[i].addEventListener('click', (e) => {
    // Grab color of square picked
    // console.log(e.toElement.style.backgroundColor)
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

function reset () {
  // Change resetBtn text
  resetBtn.textContent = 'New Game'

  // Empty messageShow
  messageShow.textContent = ''

  // Paint h1 to background
  mainHeader.style.backgroundColor = 'steelblue'

  // Generate new colors
  colors = generateRandomColors(diffLevel)

  // Set new colors to squares
  for (let i = 0; i < squares.length; i++) {
    // Check how much colors we have. Paint that quantity of colors. The others display=none
    if (colors[i]) {
      // Paint squares to colors
      squares[i].style.backgroundColor = colors[i]
      squares[i].style.display = 'block'
    } else {
      squares[i].style.display = 'none'
    }
  }

  // Pick and paint new color in the header
  pickedColor = pickColor()
}

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
// Paint picked color into header
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
