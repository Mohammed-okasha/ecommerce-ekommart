/*
- [Navbar Menu In Moblie Scrrens]
- Access To Toggle Navbar Btn
- Access To nav-menu
*/

const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

// Calling active Fun When Cklick To Toggle Btn
toggleBtn.addEventListener("click", active);

// Active Function ==============
function active () {
    // Toggle Active Class To Toggle Btn
    this.classList.toggle("active");

    // Add Active Class To nav-menu
    if (!navMenu.classList.contains("active")) {
        // Add Active Class To nav-menu
        navMenu.classList.add("active");

    } else {
        // Remove Active Class From nav-menu
        navMenu.classList.remove("active");
    };

    // When Nav Menu is Active
    //Remove Calss active-search-input From Search Form
    if(this.classList.contains("active")) {
        searchForm.classList.remove("active-search-input");
    };

};
//===========================================================
/*
[Active Search Form(Search Input)]
- Access To Search Btn
- Access To Search Form
*/
const searchBtn = document.getElementsByClassName("search-btn")[0];
const searchForm = document.getElementsByClassName("search-form")[0];

searchBtn.addEventListener('click', activeSearchForm);

function activeSearchForm() {

    // Check Search Form contains(active-search-input) ?
    !searchForm.classList.contains("active-search-input")
    ? searchForm.classList.add("active-search-input")
    : searchForm.classList.remove("active-search-input");

    // When Search Form Is Active > Remove Active Class From Nav Menu
    // When Search Form Is Active > Remove Active Class From Toggle Btn
    if(searchForm.classList.contains("active-search-input")) {
        navMenu.classList.remove("active");
        toggleBtn.classList.remove("active");
    }

}
//===========================================================
/*
[When Window Scrolling]
- Covert Header To Fixed
- Remove Active Class From Nav Menu & Toggle Btn
- Remove Calss active-search-input From Search Form
*/

// Access To Header
const header = document.getElementById("header");

window.addEventListener("scroll", windowScroll);

// Scroll Functin ==========
function windowScroll() {

    if (window.scrollY >= 50) {
        // Add sticky Calss To Header
        header.classList.add("sticky");
    
    } else {
        // Remove sticky Calss From Header
        header.classList.remove("sticky");
    };

    // Remove Active Class From Nav Menu & Toggle Btn
    if(toggleBtn.classList.contains("active") && navMenu.classList.contains("active")) {
        toggleBtn.classList.remove("active");
        navMenu.classList.remove("active");
    };

    // Remove Calss active-search-input From Search Form
    searchForm.classList.remove("active-search-input");

    scrollToTop();
};

function scrollToTop() {
    // Access To Up Btn
    const upBtn = document.querySelector(".up-btn");

    if(window.scrollY >= 1000) {
        upBtn.classList.add("active-up");

        upBtn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

    } else {
        upBtn.classList.remove("active-up");
    }
}
//===========================================================
/*
[When Window Loading]
- Set Animation To Slide Title Home Page
- 
*/

window.addEventListener("load", () => {
    // Calling slideTitleAnimation() Fun When Window Loading
    slideTitleAnimation();
});
//===========================================================
/*
[Home Slider]
- access To All Slider
- Aceess To Prev Btn & Next Btn
*/

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementsByClassName("prev-btn")[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];

// [Home Page Title Animation]
// Access To Items
const slideTitle = document.querySelectorAll(".slide-title");
const spans = document.querySelectorAll(".slide .text-muted");
const specialLinks = document.querySelectorAll(".slide .special-link");


// [1] Looping For All Slides
slides.forEach((slide, index) => {
    // index[0] * 100% > left = 0%
    // index[1] * 100% > left = 100%
    // index[2] * 100% > left = 200%
    slide.style.left = `${index * 100}%`;
});

// [2] Btns Control Next & Prev
let counter = 0;

// increment++ Conuter When Click To Next Btn
nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});

// decrement-- Conuter When Click To Prev Btn
prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});


// [3] Carousel Slide Function
function carousel() {
    // Check Counter Value > slides.length ?
    if (counter >= slides.length) {
        counter = 0;
    };

    // Check Counter Value < slides.length ?
    if(counter < 0) {
        counter = slides.length - 1;
    };

    // Looping For All Slides
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


function slideTitleAnimation() {
    // Looping For All slide Title
    slideTitle.forEach((title, index) => {
        let zero = 0;
        let one = 1;
        let two = 2;

        if(index == zero || index == one || index == two) {
            title.classList.add("title-animation");
        };
    });

    spans.forEach((span) => {
        if(span != null) {
            span.classList.add("title-animation");
        };
    });

    specialLinks.forEach((link) => {
        if(link != null) {
            link.classList.add("title-animation");
        };
    });
};

// [4] Auto Slider ====
setInterval(() => {
    // Call carousel() Fun
    counter++;
    carousel();

}, 7000);
//===========================================================
// Filter Products btn
const filterBtns = document.getElementsByClassName("filter");
// Access To All Products Cards
const cards = document.querySelectorAll("#shop .card");

// loop For All Filter Btn
for (let i = 0; i < filterBtns.length; i++) {
    const btn = filterBtns[i];
    
    btn.addEventListener("click", (e) => {

        for (let i = 0; i < filterBtns.length; i++) {
            const btn = filterBtns[i];
            // Remove active-btn Calss From All Filter Btn
            btn.classList.remove("active-btn");
        }

        let filter = e.currentTarget;
        // Add active-btn Calss To Current Target Filter Btn
        filter.classList.add("active-btn");

        // loop For All Cards
        cards.forEach((card) => {
            card.style.display = "none";

            // loop For All Filter Btn
            document.querySelectorAll(btn.dataset.active).forEach((card) => {
                card.style.display = "block";
            });
        });
    });
};
//===========================================================

// [Subscripe Popup]
// Access To Subscripe Popup
const subscripePopup = document.querySelector(".subscripe");

function sub_popup() {
    // Add popup-show Class To subscripePopup
    subscripePopup.classList.add("popup-show");

    // Access To Cose Btn
    const closeBtn = document.querySelector(".subscripe .close-btn");
    closeBtn.onclick = () => {
        // Remove popup-show Class From subscripePopup
        subscripePopup.classList.remove("popup-show");
    };
};

let count = setTimeout(sub_popup, 5000);
//===========================================================
