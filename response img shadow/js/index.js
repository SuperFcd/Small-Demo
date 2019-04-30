;(function () {
    $('.my-img').on('mouseover',function () {
        $(".my-shadow").slideDown(1000);
    })
    $('.my-shadow').on('mouseout',function () {
        $('.my-shadow').slideUp(1000)
    })  

})();