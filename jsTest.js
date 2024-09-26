const backButton = document.getElementById('backtoTop');
backButton.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
};