// Daily Challenge : Creating Objects

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} minutes of ${this.title}!`);
    }
}

// 3
const video1 = new Video('How study in the DI bootcamp', 'John Snow', 130);
video1.watch();
// 4
const video2 = new Video("How find first job in Israel's Hi-tech", 'Petrosyan Ivan', 180);
video2.watch();



// // 5
// const videosData = [
//     { title: 'How study in the DI bootcamp', uploader: 'John Snow', time: 130 },
//     { title: 'ow find first job in Israel's Hi-tech', uploader: 'Petrosyan Ivan', time: 180 },
//     { title: 'Quickly React', uploader: 'Alice Brake', time: 100 },
//     { title: 'Node.js Basics', uploader: 'Willy Boy', time: 99 },
//     { title: 'PHP', uploader: 'Eva Monis', time: 77 }
// ];

// // 6
// const videos = videosData.map(data => new Video(data.title, data.uploader, data.time));

// videos.forEach(video => video.watch());