
alert("This website is currently under construction. It may not be fully functional.");




let lastScrollTop = 0;

const topBar = document.getElementById('topBar');


window.addEventListener('scroll', function() {

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;


    if (currentScroll > lastScrollTop) {

        // User is scrolling down

        topBar.style.top = "-50px"; // Adjust this value if you change the height of the topBar

    } else {

        // User is scrolling up

        topBar.style.top = "0"; // Bring the bar into view

    }


    lastScrollTop = currentScroll;

});

// show the ideatoreality divs one by one with a smooth transition, one by one
const ideatoreality = document.querySelectorAll('.ideatoreality1');
const ideatoreality2 = document.querySelectorAll('.ideatoreality2');
const ideatoreality3 = document.querySelectorAll('.ideatoreality3');
const ideatoreality4 = document.querySelectorAll('.ideatoreality4');

// show one by one
const showIdeatoreality = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
};

const ideatorealityObserver = new IntersectionObserver(showIdeatoreality, {
    root: null,
    threshold: 0.15,
});

ideatoreality.forEach(function(img) {

    ideatorealityObserver.observe(img);
    img.classList.add('hidden');
}

);
