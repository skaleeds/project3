document.addEventListener('DOMContentLoaded', function(){
  if(document.body.classList.contains('index-page')){
    const pageTitle = document.querySelectorAll('h3[data-hidden-element-id]');  
      pageTitle.forEach(title => {
        const hiddenElementId = title.getAttribute('data-hidden-element-id');
        const hiddenElement = document.getElementById(hiddenElementId);
            
          title.addEventListener('click', function (){
            hiddenElement.classList.toggle('hidden');
	        title.classList.toggle('clicked');
          });
      });
    }

    $(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
          autoplaySpeed: 1800,
      });
  });
});
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.8314923331667, lng: -87.62722848123455 },
    zoom: 8
  });
}