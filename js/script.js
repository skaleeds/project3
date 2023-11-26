document.addEventListener('DOMContentLoaded', function(){
	if(document.body.classList.contains('index-page')){
		const pageTitle = document.querySelectorAll('.float-left h3');
	    pageTitle.foreach(function (sectionTitle) {
			const hiddenElementId = this.dataset.hiddenElementId;
			const hiddenElement = documrnt.getElementById(hiddenElementId);
			if(hiddenElement){
				hiddenElement.classList.toggle('hidden');
			}
		});
	});		
   }
});