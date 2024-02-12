/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */
$(document).ready(function() {
  // Show the custom sidebar modal on click of footer-item link
  $(".footer-item a").click(function(e) {
    e.preventDefault();
    var targetSidebar = $(this).data("sidebar");
    $("#" + targetSidebar).addClass("open");
    $(".PageOverlay").addClass("is-visible");
  });

  // Close the custom sidebar modal on click of close button or overlay
  $(".sidebar-content .close, .PageOverlay").click(function(e) {
    e.preventDefault();
    $(".custom-sidebar").removeClass("open");
    $(".PageOverlay").removeClass("is-visible");
  });

  $('body').on("click" , ".play-icon" , function(e){
    e.preventDefault();
    $(this).css("display", "none");   
    $(this).closest('.media-wrap').find('video').trigger('play');
    $(this).closest('.media-wrap').find('.pause-icon').css("display", "block");   
  });
  $('body').on("click" , ".pause-icon" , function(e){
    e.preventDefault();
    $(this).css("display", "none");   
    $(this).closest('.media-wrap').find('video').trigger('pause');
    $(this).closest('.media-wrap').find('.play-icon').css("display", "block");   
    });  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.Header__Wrapper .header_logo').addClass('hidelogo');
      $('.sticky_header_logo').removeClass('hidelogo');
      $('body').addClass('header-sticky');
    } else {
      $('.Header__Wrapper .header_logo').removeClass('hidelogo');
      $('.sticky_header_logo').addClass('hidelogo');
      $('body').removeClass('header-sticky');
    }
    var header_height = $('.Header').height();
    $('.CollectionToolbar--top').css('top', header_height);
  });

  $('body').on('click' , '.VariantSelector__Choicee' , function(e){
    e.preventDefault();
    const color_value = $(this).attr('data-value');
    $(this).parents('.VariantSelector__ChoiceList').find('.VariantSelector__Choicee').removeClass('is-selected');
    $('.Popover__ValueList .Popover__Value[data-value="' + color_value + '"]').trigger('click');
    $('.VariantSelector__ChoiceList .VariantSelector__Choicee[data-value="' + color_value + '"]').addClass('is-selected');
  });
  
  $('body').on('mouseenter', '.color .VariantSelector__Choicee', function() {
    const color_value = $(this).attr('data-value');
    $(this).parents('.VariantSelector__ChoiceList').find('.VariantSelector__Choicee').removeClass('is-selected');
    $('.Popover__ValueList .Popover__Value[data-value="' + color_value + '"]').trigger('click');
    $('.VariantSelector__ChoiceList .VariantSelector__Choicee[data-value="' + color_value + '"]').addClass('is-selected');
  });
  
  $('body').on('mouseenter', '.ProductItem__ColorSwatchItem', function() {
    const color_value = $(this).find('.ColorSwatch__Radio').val();
    $(this).find('.ColorSwatch__Radio[value="' + color_value + '"]').trigger('click');
  });

  
});
$(document).ready(function(){
  if($(window).width() < 1025){
  $('.text-multiple-image .ProductList').flickity({    
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
  });
  }
})