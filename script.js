console.log('this is a test')

// find/get value of theme in local storage to save it
let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light') // set default theme to light

} else {
    setTheme(theme) // set whatever was on local storage 
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i = 0; i < themeDots.length ; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })

}

// set theme
function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'style.css'

    } else if (mode == 'blue') {
        document.getElementById('theme-style').href='blue.css'

    } else if (mode == 'purple') {
        document.getElementById('theme-style').href='purple.css'
    }

    // set value from local storage
    localStorage.setItem('theme', mode)

}


//Get the button
let mybutton = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {
    scroll();
};

function scroll() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", scrollToTop);

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


