
let dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "FF69B4"
dodger.style.bottom = "100px"

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveDodgerLeft()
      break;
    case "ArrowRight":
      moveDodgerRight()
      break;
    case "ArrowUp":
      let topNumbers = dodger.style.bottom.replace("px", "")
      let top = parseInt(topNumbers, 10)

      dodger.style.bottom = `${top + 1}px`
      break;
    case "ArrowDown":
      let bottomNumbers = dodger.style.bottom.replace("px", "")
      let bottom = parseInt(bottomNumbers, 10)

      dodger.style.bottom = `${bottom - 1}px`;
  }
})

const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace("px", "")
  let left = parseInt(leftNumbers, 10)

  dodger.style.left = `${left - 1}px`
}

const moveDodgerRight = () => {
  let rightNumbers = dodger.style.left.replace("px", "")
  let right = parseInt(rightNumbers, 10)

  dodger.style.left = `${right + 1}px`
}