<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script>
  $(document).ready(function(){
		$('.slider').slick({
		  autoplay: true,
		  autoplaySpeed: 1800,
	});
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
});
</script>