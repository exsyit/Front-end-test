// Main Js Configuration

$(document).ready(function() {

    //# Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    //# Tabs
    $('[data-toggle="tab"]').on('click', function () {
        $(this).tab('show'); 
    });

    // Hide and show menu
    $('#restore-pass').on('click', function (e) {
        e.preventDefault();
        $('.enter-block-tabs').addClass('hidden');
    });

    $('#back-to-form').on('click', function (e) {
        e.preventDefault();
        $('.enter-block-tabs').removeClass('hidden');
    });
});