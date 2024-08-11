function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}

document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
            toggleMenu(); // Close the menu after clicking on a link in mobile view
        }
    });
});

window.addEventListener('load', function () {
    var imageUrl = 'https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg';
    var homeSection = document.getElementById('home');
    var image = new Image();
    image.src = imageUrl;
    image.onload = function () {
        homeSection.style.backgroundImage = `url('${imageUrl}')`;
        homeSection.style.backgroundSize = 'cover   ';
        homeSection.style.backgroundRepeat = 'no-repeat';
    };
});