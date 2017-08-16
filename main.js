	$.ajax(
		{
    		method: "GET",
    		url: "https://accounts.spotify.com/authorize/?client_id=e27ac3b74bc446b597e782ab2fec54de&response_type=code&redirect_uri=http://localhost:8888/callback",
    		success: function(result) {
      			console.log(result);
    		},
  		});

$(document).ready(function() {

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

		// this.spotiSong = function() {
		// 	$.ajax(
		// 		{
  //   			method: "POST",
  //   			url: "https://accounts.spotify.com/api/token",
  //   			data: {
  //     				"grant_type":    "authorization_code",
  //     				"code":          code,
  //     				"redirect_uri":  myurl,
  //     				"client_secret": mysecret,
  //     				"client_id":     myid,
  //   			},
  //   			success: function(result) {
  //     				// handle result...
  //   			},
  // 			});
  //    	}
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

