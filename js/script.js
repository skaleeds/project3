document.addEventListener('DOMContentLoaded', function(){
	if(document.body.classList.contains('index-page')){
		const pageTitle = document.querySelector('.float-left h3');
		const hiddenElement = document.getElementById('hidden-element');
		pageTitle.addEventListener('click', function (){
			hiddenElement.classList.toggle('hidden');
			sectionTitle.classList.toggle('text-white');
		});	
	}
});