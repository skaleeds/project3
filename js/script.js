document.addEventListener('DOMContentLoaded', function(){
	if(document.body.classList.contains('index-page')){
		const pageTitle = document.getElementById('page-title');
		const hiddenElement = document.getElementById('hidden-element');
		pageTitle.addEventListener('click', function (){
			console.log('clicked');
			hiddenElement.classList.toggle('hidden');
		});	
	}
});