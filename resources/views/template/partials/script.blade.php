<script>
//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
    
};

//hamburger
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
});
</script>