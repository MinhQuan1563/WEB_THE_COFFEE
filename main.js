// An / hien thanh header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } 
    else {
        document.getElementById("header").style.top = "-71px";

    }
    prevScrollpos = currentScrollPos;
}

// Dong mo Menu
const menuBtn = document.querySelector('.js-menu')
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-close')
const modalBody = document.querySelector('.js-modal-body')

function showMenu() {
    modal.classList.add('open')
}
function hideMenu() {
    modal.classList.remove('open')
}

menuBtn.addEventListener('click', showMenu)
close.addEventListener('click', hideMenu)
modal.addEventListener('click', hideMenu)
modalBody.addEventListener('click', function(event) {
    event.stopPropagation()
})


// Dong mo thanh Search
const btnSearchs = document.querySelectorAll('.js-icon-search')
const modalSearch = document.querySelector('.js-modal-search')
const closeSearch = document.querySelector('.js-close-search')
const headerSearch = document.querySelector('.js-header-search')

function showSearchBar() {
    modalSearch.classList.add('drop')
}
function hideSearchBar() {
    modalSearch.classList.remove('drop')
}

for (const btnSearch of btnSearchs) {
    btnSearch.addEventListener('click', showSearchBar)
    closeSearch.addEventListener('click', hideSearchBar)
    modalSearch.addEventListener('click', hideSearchBar)
    headerSearch.addEventListener('click', function(event) {
        event.stopPropagation()
    })
}

// Mo subvnav tren mobile tablet
var menuShow = document.getElementById('js-menu-show')
var header = document.getElementById('header')
var headerHeight = header.clientHeight
var headerNav = document.getElementById('js-header-nav')

menuShow.onclick = function() {
    var isClosed = header.clientHeight === headerHeight
    if(isClosed) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}


// Mo subnav level 2
var navItems = document.querySelectorAll('.header-nav__item');
var navItem = document.querySelector('.header-nav__item');
var navItemHeight = navItem.clientHeight;

for (const navItem of navItems) {
    navItem.onclick = function() {
        var isClosed = navItem.clientHeight === navItemHeight;
        if(isClosed) {
            navItem.style.height = 'auto';
        }
        else {
            navItem.style.height = null;
        }
    }
}

var subNavItems = document.querySelectorAll('.subnav__level-3');
var subNavItem = document.querySelector('.subnav__level-3');
var subNavItemHeight = subNavItem.clientHeight;

for (const subNavItem of subNavItems) {
    subNavItem.onclick = function() {
        var isClosed = subNavItem.clientHeight === subNavItemHeight;
        // subNavItem.stopPropagation(event)
        if(isClosed) {
            subNavItem.style.height = 'auto';
            // navItem.style.height = 'auto';
        }
        else {
            subNavItem.style.height = null;
            // navItem.style.height = 'auto';
        }
    }
}

// Scroll to top
//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() {scrollFunction()};
// khai báo hàm scrollFunction
function scrollFunction() {
    // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        //nếu lớn hơn 20px thì hiện button
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
            //nếu nhỏ hơn 20px thì ẩn button
        document.getElementById("scroll-to-top").style.display = "none";
    }
}
//gán sự kiện click cho button
document.getElementById('scroll-to-top').addEventListener("click", function(){
    //Nếu button được click thì nhảy về đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// An vao cac pt cua menu Header ko bi troi len
var tests = document.querySelectorAll('.header-nav li a[href*="#"]')

for (const test of tests) {
    test.onclick = function(event) {
        event.preventDefault();
    }
}