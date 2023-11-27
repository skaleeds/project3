document.addEventListener('DOMContentLoaded', function(){
	if(document.body.classList.contains('index-page')){
		const pageTitle = document.querySelectorAll('h3[data-hidden-element-id]');
		
	    pageTitle.forEach(currentTitle => {
			const hiddenElementId = currentTitle.getAttribute('data-hidden-element-id');
			const hiddenElement = documrnt.getElementById(hiddenElementId);
			currentTitle.addEventListener('click', function (){
				hiddenElement.classList.toggle('hidden');
			}};
		});
	}
});