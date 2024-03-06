$(function () {
    let header = $('header');
    let menuOpen = $('header .menu_open');
    let nav = $('header nav');
    let body = $('body');

    //메뉴 버튼 클릭 시, 헤더 스타일 변경과 메뉴 열기
    menuOpen.click(function () {
        if (header.css('height')=== '150px' && $('header > div a').css('color') === 'rgb(255, 255, 255)') { /* 색상명 쉼표 다음에 띄어써야 함!!! */
            header.addClass('on');
        } else if (header.css('height') === '150px' && $('header > div a').css('color') === 'rgb(51, 51, 51)') {
            header.removeClass('on');
        } else if (header.css('height') === '100px') {
            header.addClass('on');
        }
        header.toggleClass('menuOpen');
        nav.toggleClass('menuOpen');
        body.toggleClass('on');
    })

    //스크롤 시, 헤더 스타일 변경과 메뉴 위치 변경
    $(window).scroll(function () {
        if (window.scrollY > 100) {
            header.addClass('on');
            header.addClass('scroll');
            nav.addClass('scroll');
        } else {
            header.removeClass('on');
            header.removeClass('scroll');
            nav.removeClass('scroll');
        }
    })

    AOS.init();
})