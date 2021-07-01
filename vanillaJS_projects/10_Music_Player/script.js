const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles

const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song index

let songIndex = 2;


// Initailly load song

loadSong(songs[songIndex]);

// Update song detail

function loadSong(song) {
    title.innerText = song;

    audio.src = `./music/${song}.mp3`
    cover.src = `./images/${song}.jpg`
}

// Play song

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('.fas').classList.remove('fa-play');
    playBtn.querySelector('.fas').classList.add('fa-pause');

    audio.play();
}

// Pause song

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('.fas').classList.remove('fa-pause');
    playBtn.querySelector('.fas').classList.add('fa-play');

    audio.pause();
}

// Prev song

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Next song 

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Update progress

function updateProgress(e) {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;

    progress.style.width = `${progressPercent}%` 
   
}

// Set progree bar

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;
}

// Event Listeners

playBtn.addEventListener('click', () => {
    const isPlay = musicContainer.classList.contains('play');
    
    if(isPlay) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/Song update

audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar

progressContainer.addEventListener('click', setProgress);

// Song ends

audio.addEventListener('ended', nextSong);