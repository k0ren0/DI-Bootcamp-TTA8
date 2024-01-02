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

const video1 = new Video('How study in the DI bootcamp', 'John Snow', 13);
video1.watch();

const video2 = new Video("How find first job in Israel's Hi-tech", 'Petrosyan Ivan', 7.40);
video2.watch();
