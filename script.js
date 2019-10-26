document.getElementById("burger").addEventListener("click", menuAnimatie);

function menuAnimatie() {


    var element = document.getElementById("navigation");
    element.classList.toggle("active");

}

window.onscroll = () => {
    const nav = document.querySelector('nav');
    if (this.scrollY <= 10) nav.className = '';
    else nav.className = 'scroll';
};


$('#taart').change(function () {
    if ($(this).is(":checked")) {
        $('.taart').removeClass('hidden');
    } else {
        $('.taart').addClass('hidden');
    }
});

$('#cake').change(function () {
    if ($(this).is(":checked")) {
        $('.cake').removeClass('hidden');
    } else {
        $('.cake').addClass('hidden');
    }
});
