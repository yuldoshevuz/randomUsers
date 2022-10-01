// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

// get Data function
const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', resource)
        request.send()
        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                overlay.classList.remove('hidden')
            } else if (request.readyState === 4 && request.status === 200) {
                overlay.classList.add('hidden')
                const response = JSON.parse(request.responseText)
                resolve(response)
            } else if (request.readyState === 4) {
                reject('error')
                overlay.classList.add('hidden')
            }
        })
    })
}