const backButton = document.getElementById('toBottom');
backButton.onclick = function(){
    window.scrollTo(0, document.body.scrollHeight);
};