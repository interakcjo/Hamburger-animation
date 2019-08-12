const hamburger = document.querySelector('.hamburger');

// hamburger.addEventListener('click', (e) => {
//     e.target.classList.toggle('active');
// });

// better way in this example
hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
});