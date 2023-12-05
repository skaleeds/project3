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
  
  window.initmap = function () {
	  var map = new google.maps.Map(document.getElementById('map'), {
		  center: { lat: 41.8314923331667, lng: -87.62722848123455 },
		  zoom: 8,
        });
  };
  
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap';
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
  
  var mapIframe = document.getElementById('map-iframe');
	  mapIframe.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&q=IIT+Tower+Chicago&center=41.8314923331667,-87.62722848123455";
});