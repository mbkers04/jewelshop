let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

$(document).ready(function() {
  $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      e.stopPropagation();
  });

  $('html').click(function(){
      $('.nav-dropdown').hide();
  })
  $('#nav-toggle').click(function(){
      $('nav ul').slideToggle();
  })
  $('#nav-toggle').on('click', function(){
      this.classList.toggle('active');
  });
});


//navbar
$(function() {
  $(".toggle").on("click", function() {
      if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
      } else {
          $(".item").addClass("active");
      }
  });
});


