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
  
  window.initMap = function () {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.8314923331667, lng: -87.62722848123455 },
	  zoom: 8,
    });
	
    var bounceLogo = new google.maps.Marker({
      position: { lat: 41.8314923331667, lng: -87.62722848123455 },
	  map: map,
	  animation: google.maps.Animation.BOUNCE,
	  icon: 'media/marker.png',
	});
	
	var infoBox = new google.maps.InfoBox({
		content: '<div>This is the location of the IIT Tower.</div>',
	});
	
	bounceLogo.addListener('click', function () {
		infoBox.open(map, bounceLogo);
	});
	
    google.maps.event.addListener(infoBox, 'domready', function() {
      var xBtn = document.getElementById('info-box-close');
      xBtn.addEventListener('click', function () {
        infoBox.close();
    });
});