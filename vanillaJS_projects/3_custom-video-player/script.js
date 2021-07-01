const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play & pause Video

function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// update Icon

function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update timestamp && progress

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get mins 

    let mins = Math.floor (video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    // Get secs

    let secs = Math.floor (video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// Stop video

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Set video time to progress

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Event Listener

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop .addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);