document.addEventListener('DOMContentLoaded', function(){
	if(document.body.classList.contains('index-page')){
		const pageTitle = document.querySelectorAll('h3[data-hidden-element-id]');
		
	    pageTitle.foreach(title => {
			const hiddenElementId = title.getAttribute('data-hidden-element-id');
			const hiddenElement = documrnt.getElementById(hiddenElementId);
			pageTitle.addEventListener('click', function (){
				hiddenElement.classList.toggle('hidden');
			}};
		});
	}
});