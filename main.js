$(document).ready(function() {
	
	SC.initialize({
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: 'http://example.com/callback'
  	});

	function Jukebox(playing) {
		
		this.nowPlaying = playing;
		var played = $("#player").get(0);
		this.playlist = [];
		var songNum = 0;

		this.startNpause = function() {
			document.onkeydown = function(Sss) {
    			Sss = Sss || window.event;
    			if (Sss.keyCode == 83 && this.nowPlaying) {
    				this.nowPlaying = false;
    				played.play();
        		} else {
        			this.nowPlaying = true;
        			played.pause();
				}
			}
		};

		this.stop = function () {
			document.onkeypress = function(zeroh) {
    			zeroh = zeroh || window.event;
    			if (zeroh.keyCode == 48) {
      				played.currentTime = 0;
      				played.pause();
    			}
			}
		};

		this.loadNext = function() {
      		songNum++;
        	played.src = this.playlist[songNum].source;
        	document.getElementById("songName").innerText = this.playlist[songNum].name;
        	document.getElementById("songArtist").innerText = this.playlist[songNum].artist;
        	document.getElementById("songAlbum").innerText = this.playlist[songNum].album;
    	};

    	this.loadPrev = function() {
     		songNum--;
        	played.src = this.playlist[songNum].source;
        	document.getElementById("songName").innerText = this.playlist[songNum].name;
        	document.getElementById("songArtist").innerText = this.playlist[songNum].artist;
        	document.getElementById("songAlbum").innerText = this.playlist[songNum].album;
   		};
		
		this.loadRandom = function() {
			songNum = Math.floor((Math.random() * 3) + 0);
			played.src = this.playlist[songNum].source;
        	document.getElementById("songName").innerText = this.playlist[songNum].name;
        	document.getElementById("songArtist").innerText = this.playlist[songNum].artist;
        	document.getElementById("songAlbum").innerText = this.playlist[songNum].album;
		}
   		

		this.addSong = function(){
			this.playlist.push(song1, song2, song3);
		};	
	};
	
	juke = new Jukebox(true);

	var Playlist = function Playlist(name, artist, album, source) {
		this.name = name;
		this.artist = artist;
		this.album = album;
		this.source = source;
	}; 

	var song1 = new Playlist("Lord of the rings ", "Samiyam", "Animals Have Feelings", "song1.mp3");
	var song2 = new Playlist("Miss Primetime", "Big Gigantic", "Self Titled", "song2.mp3");
	var song3 = new Playlist("Highly Possible", "Big Gigantic", "Self Titled", "song3.mp3");

	juke.addSong(song1, song2, song3);

	juke.startNpause();
	juke.stop();
	
});

