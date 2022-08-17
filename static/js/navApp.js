// const logo = document.querySelector('.logo');
const burger = document.querySelector('.burger');
const allBurgers = document.querySelectorAll('.burger div');


prime_color = "#f1f1f1";
second_color = "#000000";
dark_prime = "#ebebeb";
nav_color = "#ffffff";

const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const navActive = document.querySelector('.nav-active');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navHeader = document.querySelector('nav .nav-header');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // logo.classList.toggle('logo-slide');
        // navHeader.classList.toggle('nav-header-active');


        if (nav.classList.contains("nav-active")) {
            nav.style.animation = `navLinksSlide 0.3s ease-in`;

            // logo.style.animation = `logoSlide 0.3s ease-in`;
            // logo.style.color = second_color;

            allBurgers.forEach(line => {
                line.style.backgroundColor = second_color;
            });

            // navHeader.style.animation = `navHeaderSlide 0.3s ease in`;
        } else {
            nav.style.animation = `navActiveSlide 0.3s ease-out`;

            // logo.style.animation = `logoSlideBack 0.3s ease-out`;

            // navHeader.style.animation = `navHeaderBack 0.3s ease in`;
        }

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}

const navScroll = () => {
    const nav_header = document.querySelector('nav .nav-header');
    const nav = document.querySelector('nav');

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 100) {

            nav_header.style.backgroundColor = nav_color;
            nav_header.style.boxShadow = "0px 3px 3px rgb(180, 180, 180)";

            logo.style.color = second_color;

            allBurgers.forEach(line => {
                line.style.backgroundColor = second_color;
            });

            nav.style.marginTop = "0px";
        } else {
            nav_header.style.backgroundColor = "transparent";
            nav_header.style.boxShadow = 'none';

            logo.style.color = prime_color;
            allBurgers.forEach(line => {
                line.style.backgroundColor = prime_color;
            });

            nav.style.marginTop = "5px";
        }
    });
}

const objectApear = () => {
    const read = document.querySelector('#howto .howto .rsd');
    
    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        console.log(scroll_position);
        if (scroll_position > 1000) {
            read.style.animation = `objectScrollUp 0.3s ease forwards`;
        }
    });
}

navSlide();
// navScroll();