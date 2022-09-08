function dropdownToggle() {
    document.getElementById("header__catalog-dropdown").classList.toggle("header__catalog-dropdown-show");
}

$(document).ready(function() {
    $(".catalog__mobile-btn").click(function() {
        $(this).parent('li').find('ul').toggleClass('catalog__mobile-list-dropdown-open')
    });
});