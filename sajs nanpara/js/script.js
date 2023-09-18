let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});



const aboutLink = document.querySelector('li:nth-child(2) > a'); // The ABOUT menu link
        const submenu = document.querySelector('.submenu');

        aboutLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default behavior (navigating to another page)
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}