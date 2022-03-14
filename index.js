// global variables
const myEmojis = ['👨🏻‍💻', '🏃🏻‍♂️', '🕺🏻']
const emojiContainer = document.getElementById('emoji-container')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')
let emojiInput = document.getElementById('emoji-input')

// render emojis function
function renderEmojis() {
  let updatedItems = ''
  for (let i = 0; i < myEmojis.length; i++) {
    updatedItems += `<span>${myEmojis[i]}</span>`
  }
  emojiContainer.innerHTML = updatedItems
}
renderEmojis()

// add to end btn
pushBtn.addEventListener('click', function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ''
    renderEmojis()
  }
})

// add to beginning btn
unshiftBtn.addEventListener('click', function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ''
    renderEmojis()
  }
})

// remove from beginning btn
shiftBtn.addEventListener('click', function () {
  myEmojis.shift()
  renderEmojis()
})

//remove from end btn
popBtn.addEventListener('click', function () {
  myEmojis.pop()
  renderEmojis()
})
