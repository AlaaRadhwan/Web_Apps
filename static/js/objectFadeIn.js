const rsds = document.querySelectorAll('.rsd');
const phones = document.querySelectorAll('.phone');
const ctas = document.querySelectorAll('.download-cta');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
};

const phoneOptions = {
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
}

const appearOnScroll = new IntersectionObserver
(function(
    entries, appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

rsds.forEach(rsd => {
    appearOnScroll.observe(rsd);
});


const phoneOnScroll = new IntersectionObserver
(function(
    entries, phoneOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                phoneOnScroll.unobserve(entry.target);
            }
        })
    }, phoneOptions);

phones.forEach(phone => {
    phoneOnScroll.observe(phone);
})

