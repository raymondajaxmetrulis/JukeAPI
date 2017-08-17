SC.initialize({
  	client_id: 'fd4e76fc67798bfa742089ed619084a6',
  	redirect_uri: 'http://localhost:8888/'
});


$(document).ready(function() {

	function Jukebox(playing) {
		
		this.nowPlaying = playing;
		var played = $("#player").get(0);
		var name = $("#songName").get(0);
		var artist = $("#songArtist").get(0);
		var album = $("#songAlbum").get(0);
		var scTrackLink = $("#songLink").get(0);
		var scUserLink = $("#artistLink").get(0);
		var descrAndGenre = $("#descriptionGenre").get(0);
		var artwork = $("#artwork").get(0);
		this.playlist = [];
		var songNum = 0;
		this.SCtrack = [];
		this.SCplaylist = [];

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
        	name.innerText = this.playlist[songNum].name;
        	artist.innerText = this.playlist[songNum].artist;
        	album.innerText = this.playlist[songNum].album;
    	};

    	this.loadPrev = function() {
     		songNum--;
        	played.src = this.playlist[songNum].source;
        	name.innerText = this.playlist[songNum].name;
        	artist.innerText = this.playlist[songNum].artist;
        	album.innerText = this.playlist[songNum].album;
   		};
		
		this.loadRandom = function() {
			songNum = Math.floor((Math.random() * 3) + 0);
			played.src = this.playlist[songNum].source;
        	name.innerText = this.playlist[songNum].name;
        	artist.innerText = this.playlist[songNum].artist;
        	album.innerText = this.playlist[songNum].album;
		}
   		

		this.addSong = function(){
			this.playlist.push(song1, song2, song3);
		};	

		this.addSCtrack = function() {
       		path = $("#trackID").val();
     		trackid = "tracks/" + path;
     		SC.get(trackid).then(function(tracks){
				played.src = tracks.stream_url + "?client_id=fd4e76fc67798bfa742089ed619084a6";
				name.innerText = tracks.title;
				artist.innerText = tracks.user.username;
				scTrackLink.href = tracks.permalink_url;
				scTrackLink.innerText = "Check out the track page";
				scUserLink.href = tracks.user.permalink_url;
				scUserLink.innerText = "Check out the artist's page";
				descrAndGenre.innerText = "Description: " + tracks.description + " Genre: " + tracks.genre; 
				artwork.src = tracks.artwork_url + "?client_id=fd4e76fc67798bfa742089ed619084a6";
			});
		};
	};
		SC.resolve('https://soundcloud.com/tankandthebangas/boxes-and-squares').then(function(results){
			console.log(results);
		});
	
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


