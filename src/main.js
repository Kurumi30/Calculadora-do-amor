import { getRandomMessage, getUrlInfo, showNotification } from "./utils"

const display = document.getElementById('display')

function appendToDisplay(value) {
  display.value += value
}

function calculate() {
  const expression = display.value

  if (expression.match(/[0-9]+[+\-*/][0-9]+/) || expression !== undefined) {
    display.value = getRandomMessage()

    showNotification(getUrlInfo().decodeParams)
  } else {
    try {
      display.value = eval(expression)
    } catch (err) {
      display.value = getRandomMessage()

      showNotification(getUrlInfo().decodeParams)
    }
  }
}

function clearDisplay() {
  display.value = ''
}

addEventListener('load', () => {
  console.log(getUrlInfo())
})

window.appendToDisplay = appendToDisplay
window.calculate = calculate
window.clearDisplay = clearDisplay
