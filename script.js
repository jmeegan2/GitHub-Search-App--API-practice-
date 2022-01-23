// The Variables
const searchbar = document.querySelector('searchbar-container');
const profilecontainer = docuemnt.querySelector('.profile-container')
const root = document.documentElement.style;
const get = (param) => document.getElementById('${param}');
const url = 'https://api.github.com/users/';                      //linking the github API ***********
const noresults = get('no-results')
const btnmode = get('btn-mode')
const modetext = get('mode-text')
const modeicon = get('mode-icon')
const btnsubmit = get('submit')
const input = get('input')
const avatar = get('avatar')
const userName = get('name')
const user = get('user')
const date = get('date')
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = get('bio')
const repos = get('repos')
const followers = get('followers')
const following = get('following')
const user_location = get('location')
const page = get('page')
const twitter = get('twitter')
const company = get('company')
let darkMode = false;
//buttons 
btnsubmit.addEventListener('click', function () {
    if (input.value !== "") {
        getUserData(url + input.value);
    }
})
input.addEventListener("keydown", function (e) {
    if (!e) {
        var e = window.event;
    }
    if (e.key == "Enter") {
        if (input.value !== "") {
            getUserData(url + input.value);
        }
    }
}, false);
input.addEventListener('input', function () {
    noresults.style.display = "none"
    profilecontainer.classList.remove('active')
    searchbar.classList.add('active')
})
btnmode.addEventListener('click', function () {
    if (darkMode == false) {
        darkModeProperties()
    } else {
        lightModeProperties()
    }
})
//functions
function getUserData(gitUrl) {
    fetch(gitUrl)
        .then(response => response.json())
        .then(data => {
            updateProfile(data)
        })
        .catch(error => {
            throw error;
        })
}
function updateProfile(data) {
    if(data.message !== "Not Found"){
        noresults.style.display = "none";
        function checkNull(param1, param2) {
            if((param === "") ||)
        }
    }
}