console.log("page loaded...");



var video = document.querySelectorAll('.myVideo');

for (let i = 0; i < video.length; i++) {

    video[i].addEventListener('mouseenter',
        function (e) {
            video[i].play();
            video[i].muted=true;
            



        })



}



