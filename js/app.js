const form = document.getElementById('form')
const refreshBtn = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')

// set Data to html function
function setData() {
    getData(API)
    .then((data) => {
        clearBtn.classList.remove('hidden')
        data = data.results
        user.innerHTML = ''
        data.forEach((item) => {
            const { picture, name, dob, location, gender } = item
            user.innerHTML += `
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="${picture.large}"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- ${name.title} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${dob.age} years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>- ${location.city}, ${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
              </div>
            </li>
            `
        })
    })
    .catch((err) => {
        console.log(err)
    })
}
setData()

// search user data function
function searchUser(e) {
    const searchValue = e.target.value
    const userName = document.querySelectorAll('.user__name')
    userName.forEach((item) => {
        const userName = item.children[1].innerHTML.toLowerCase()
        if (userName.includes(searchValue.toLowerCase())) {
            item.parentElement.classList.remove('hidden')
        } else {
            item.parentElement.classList.add('hidden')
        }
    })
}

// Refresh, Clear, Search button events
refreshBtn.addEventListener('click', (e) => {
    e.preventDefault()
    setData()
})
clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    user.innerHTML = ''
    clearBtn.classList.add('hidden')
})
form.addEventListener('input', (e) => {
    searchUser(e)
})
// delete element from html
document.addEventListener('click', (e) => {
    if (e.target.getAttribute('class') === 'user__delete--btn') {
        e.target.parentElement.remove()
        if(user.children.length === 0) {
            clearBtn.classList.add('hidden')
        }
    }
})