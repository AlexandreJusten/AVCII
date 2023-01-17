import './../../App.css';
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import React,{useState,useEffect} from 'react';

export default function VideoOpen() {

    const MyItem = ({ children }) => (
        <div style={{ width: '40vw', height: 250 }}>
          {children}
        </div>
      );
      const [videos,setVideos] = useState([]);
      
return(
<div>

  {videos.map((video,key)=>{
    return (
      <div className='carrosel'>
            <SnapList>
                <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                <MyItem>
                  <iframe width="500" height="300" src={video.url} title="One Of The Best Web Developer Portfolio I've Seen This Year" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </MyItem>
                </SnapItem>
              </SnapList>
              </div>
          )
        })}
        </div>

)
}