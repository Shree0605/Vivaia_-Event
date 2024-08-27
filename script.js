// // Carousel Functionality
// let slideIndex = 0;
// const slides = document.querySelector('.slides');
// const slideImages = slides.querySelectorAll('img');

// function showSlides() {
//     slideIndex++;
//     if (slideIndex >= slideImages.length) slideIndex = 0;
//     slides.style.transform = `translateX(${-slideIndex * 100}%)`;
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }

// showSlides();

// // Countdown Timer
// const countdownDate = new Date("Dec 31, 2024 15:37:25").getTime();

// function updateCountdown() {
//     const now = new Date().getTime();
//     const distance = countdownDate - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("days").innerText = days;
//     document.getElementById("hours").innerText = hours;
//     document.getElementById("minutes").innerText = minutes;
//     document.getElementById("seconds").innerText = seconds;

//     if (distance < 0) {
//         clearInterval(countdownInterval);
//         document.getElementById("timer").innerHTML = "Event Started!";
//     }
// }

// const countdownInterval = setInterval(updateCountdown, 1000);

// // Tab Functionality
// const tabButtons = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab-content');

// tabButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         tabButtons.forEach(btn => btn.classList.remove('active'));
//         tabContents.forEach(content => content.style.display = 'none');

//         button.classList.add('active');
//         document.getElementById(button.getAttribute('data-tab')).style.display = 'block';
//     });
// });

// // Dark Mode Toggle
// const toggleButton = document.createElement('button');
// toggleButton.innerText = 'Toggle Dark Mode';
// toggleButton.style.position = 'fixed';
// toggleButton.style.bottom = '20px';
// toggleButton.style.right = '20px';
// toggleButton.style.padding = '10px';
// toggleButton.style.backgroundColor = '#333';
// toggleButton.style.color = '#fff';
// toggleButton.style.border = 'none';
// toggleButton.style.cursor = 'pointer';
// document.body.appendChild(toggleButton);

// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// Carousel Functionality
// let slideIndex = 0;
// const slides = document.querySelector('.slides');
// const slideImages = slides.querySelectorAll('img');

// function showSlides() {
//     slideIndex++;
//     if (slideIndex >= slideImages.length) slideIndex = 0;
//     slides.style.transform = `translateX(${-slideIndex * 100}%)`;
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }

// showSlides();

// // Countdown Timer
// let eventBooked = false; // Initially, no event is booked

// function showTimerPopup() {
//     document.getElementById('timer-popup').style.display = 'flex';
//     const countdownDate = new Date("Dec 31, 2024 15:37:25").getTime();

//     function updateCountdown() {
//         const now = new Date().getTime();
//         const distance = countdownDate - now;

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         document.getElementById("days").innerText = days;
//         document.getElementById("hours").innerText = hours;
//         document.getElementById("minutes").innerText = minutes;
//         document.getElementById("seconds").innerText = seconds;

//         if (distance < 0) {
//             clearInterval(countdownInterval);
//             document.getElementById("timer").innerHTML = "Event Started!";
//         }
//     }

//     const countdownInterval = setInterval(updateCountdown, 1000);
// }

// // Simulate booking an event
// function bookEvent() {
//     eventBooked = true;
//     showTimerPopup(); // Show timer popup when an event is booked
// }

// // Simulate booking an event (remove/comment this line in actual implementation)
// setTimeout(bookEvent, 2000);

// Carousel Functionality
let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    // Loop through slides to hide them
    slideImages.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) dot.classList.add('active');
    });

    // Increment slide index or reset to 0
    slideIndex = (slideIndex + 1) % slideImages.length;
}

// Set interval to change slides
setInterval(showSlides, 3000); // Change image every 3 seconds

// Initial slide setup
showSlides();




