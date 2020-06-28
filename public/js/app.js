const search = document.querySelector('form').querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    messageOne.textContent = 'Loading...'

    fetch(`http://localhost:3000/weather?address=${search.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            }
        })
    })
})