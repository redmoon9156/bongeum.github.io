function toggleMenu() {
    const nav = document.getElementById('navOverlay');
    const spans = document.querySelectorAll('.menu-trigger span');
    nav.classList.toggle('active');
    if(nav.classList.contains('active')) {
        spans[0].style.transform = 'translateY(8.5px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-8.5px) rotate(-45deg)';
    }
    else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}
