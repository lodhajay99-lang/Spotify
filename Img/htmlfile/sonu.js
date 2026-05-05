
music = new Audio('/a1.mp3');
const songs = [
    {
        id: 1,
        songName: `Abhi mujh mein kahin <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s1.jpg",
        Names: `Abhi mujh mein kahin`
    },
    {
        id: 2,
        songName: `Dil Dooba <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s2.jpg"
        , Names: `Dil Dooba `
    },
    {
        id: 3,
        songName: `Ab Muje Raat Din <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s3.jpg"
        , Names: `Shubharambh`
    }
    , {
        id: 4,
        songName: `Sandeshe Aate Hai <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s4.jpg"
        , Names: `Sandeshe Aate Hai `
    }
    , {
        id: 5,
        songName: `Jabse Tere Naina <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s5.jpg"
        , Names: `Jabse Tere Naina`
    }
    , {
        id: 6,
        songName: `Kiska Hai Tumho Intazar <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s6.jpg"
        , Names: `Kiska Hai Tumho Intazar`
    }
    , {
        id: 7,
        songName: `Koi Tum Sa Nahi<br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s7.jpg"
        , Names: `Koi Tum Sa Nahi`
    }
    , {
        id: 8,
        songName: `Noor E Khuda <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s8.jpg"
        , Names: `Noor E Khuda `
    }
    , {
        id: 9,
        songName: `Pardesiya <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s9.jpg"
        , Names: `Pardesiya`
    }
    , {
        id: 10,
        songName: `Pitah Se Naam Hai Tera <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s10.jpg"
        , Names: `Pitah Se Naam Hai Tera `

    }
    , {
        id: 11,
        songName: `Saatiya <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s11.jpg"
        , Names: `Saatiya`
    }
    , {
        id: 12,
        songName: `Sapna Jahan <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s12.jpg"
        , Names: `Sapna Jahan`
    }
    , {
        id: 13,
        songName: `Soniya <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s13.jpg"
        , Names: `Soniya`
    }
    , {
        id: 14,
        songName: `Tera Milna Pal Do Pal Ka <br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s14.jpg",
        Names: `Tera Milna Pal Do Pal Ka`
    }
    , {
        id: 15,
        songName: `Tumhi Dekho Naa<br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s15.jpg"
        , Names: `Tumhi Dekho Naa`
    },
    {
        id: 16,
        songName: `Main Badhiya tu Bhi Badiya<br><div class="subtitle">Sonu Nigam</div>`,
        posters: "sn/s16.jpg"
        , Names: `Main Badhiya tu Bhi Badiya`
    }




]

Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('Img')[0].src = songs[i].posters;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let search_box = document.getElementsByClassName('search_box')[0];
songs.forEach(element => {
    const { id, songName, posters } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;

    card.innerHTML = `
    <Img src =" ${posters}" alt="">
     <i class="bi playListPlay bi-play-circle-fill" id="${id}"></i>
                <div class="contents">
                  ${songName}
                </div>`;
    search_box.appendChild(card);



});
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_box.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('contents')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > 0) {
            items[index].style.display = "flex";
        }
        else {
            items[index].style.display = "none";
        }
    }
});


let masterplay = document.getElementById('masterplay');
masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-circle');
        masterplay.classList.add('bi-pause-circle');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-circle');
        masterplay.classList.remove('bi-pause-circle');

    }
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('item')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
pop_art_right.addEventListener('click', () => {
    pop_art.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
    pop_art.scrollLeft -= 330;
})
const makeAllbackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}




let index = 0;
let pster = document.getElementById('pster');
let title = document.getElementById('title');
let master_play = document.querySelector('.master_play');

let downloads = document.getElementById('downloadmusic')
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `sonunigam/s${index}.mp3`;
        pster.src = `sn/s${index}.jpg`;
        master_play.style.opacity = '1';
        title.innerHTML = songs[index - 1].songName;
        songName = songs[index - 1].Names;
        music.play();
        downloads.href = `sonunigam/s${index}.mp3`;
        downloads.setAttribute('download', songName);
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-circle');
        masterplay.classList.add('bi-pause-circle');
        makeAllbackground();
        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105, 0.1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
    })
})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('volbar')[0];
let vol_dot = document.getElementById('voldot');
music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentend.innerHTML = `${min}:${sec}`;
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentstart.innerHTML = `${min1}:${sec1}`;
    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vool = vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_m = vol.value;
    vol_bar.style.width = `${vol_m}%`;
    vol_dot.style.left = `${vol_m}%`;
    music.volume = vol_m / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1)
        index = Array.from(document.getElementsByClassName('songitem')).length;
    music.src = `sonunigam/s${index}.mp3`;
    pster.src = `sn/s${index}.jpg`;
    title.innerHTML = songs[index - 1].songName;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
    makeAllbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105, 0.1)';
    makeAllplays();


})
next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length)
        index = 1;
    music.src = `sonunigam/s${index}.mp3`;
    pster.src = `sn/s${index}.jpg`;
    title.innerHTML = songs[index - 1].songName;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
    makeAllbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105, 0.1)';
    makeAllplays();

});

music.muted = vol.value == 0;
music.full = vol.value == 50;

vol_icon.addEventListener('click', () => {
    if (music.muted = true) {
        vol_bar.style.width = `${0}%`;
        vol_dot.style.left = `${0}%`;
    }
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
})

vol_icon.addEventListener('dblclick', () => {
    if (music.muted = true) {

        vol_bar.style.width = `${50}%`;
        vol_dot.style.left = `${50}%`;
    }
    music.muted = false;
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-down-fill');
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }

})
const next_music = () => {
    if (index == songs.length) {
        index = 1;

    }
    else {

        index++;
    }
    music.src = `sonunigam/s${index}.mp3`;
    pster.src = `sn/s${index}.jpg`;
    title.innerHTML = songs[index - 1].songName;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
    makeAllbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105, 0.1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');


}
const random_music = () => {
    if (index == songs.length) {
        index = 1;

    }
    else {
        index = Math.floor(Math.random() * songs.length + 1);
    }
    music.src = `sonunigam/s${index}.mp3`;
    pster.src = `sn/s${index}.jpg`;
    title.innerHTML = songs[index - 1].songName;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
    makeAllbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105, 0.1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');

}
const repeat_music = () => {
    index;
    music.src = `sonunigam/s${index}.mp3`;
    pster.src = `sn/s${index}.jpg`;
    title.innerHTML = songs[index - 1].songName;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
    makeAllbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105, 0.1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');

}
music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }



})

let returnpage = document.getElementsByClassName('Home')[0];
returnpage.addEventListener('click', () => {
    history.go(-1);
})