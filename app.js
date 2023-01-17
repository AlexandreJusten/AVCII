const express =require('express');
const ytdl= require('ytdl-core');
const { Client } = require("youtubei");
const app=express();

const url = 'https://www.youtube.com/watch?v=a_1tA0bpDQs&list=RDQMz_KsxiLkSfk';

app.get('/',function(req,res){
   

    res.header('Content-Disposition', 'attachmentt; filename="vide.mp3"');
    return ytdl(url,{ filter: 'audioonly' }).pipe(res);
});
app.get('/2',function(req,res){

run();

    return res.send('a')
   
});
const youtube = new Client();

const run = async () => {

	const playlist = await youtube.getPlaylist("PLk9XvfPR8vS_EOidYR4kwGtC1otkplISO");
    a = playlist.videos.items;
	console.log(a); 
    if(playlist.videos.items.length >= 100){
	    let newVideos = await playlist.videos.next(); 
	    console.log(playlist.videos.items.length); 
	    await playlist.videos.next(0); 
    }
return a;
};


app.listen(3000);