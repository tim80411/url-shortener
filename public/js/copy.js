const copyButton = document.querySelector('.copy-button')
const copyContent = document.querySelector('.copy-content')

copyButton.addEventListener('click', event => {
  navigator.clipboard.writeText(copyContent.innerText)
    .then(() => {
      console.log('copy success')
    })
    .catch(err => {
      console.log(err)
    })
})