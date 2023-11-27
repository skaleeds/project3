document.addEventListener('DOMContentLoaded', function(){
    if(document.body.classList.contains('index-page')){
        const pageTitle = document.querySelectorAll('h3[data-hidden-element-id]');
        
        pageTitle.forEach(title => {
            const hiddenElementId = title.getAttribute('data-hidden-element-id');
            const hiddenElement = document.getElementById(hiddenElementId);
            title.addEventListener('click', function (){
                hiddenElement.classList.toggle('hidden');
            });
        });
    }
});