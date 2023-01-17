import { useState } from 'react'
import reactLogo from './assets/react.svg'
import VideoOpen from './components/videosOpen'
import './App.css'

function App() {
  const [url,setUrl] = useState('')
 
const download=()=>{
 alert(url)
}
  return (
    <div className="App">
      <div>
        <h1>AVCII</h1>
      </div>
      <div className="card">
        <input type="text" placeholder='Link' id='urlInput' onChange={e => setUrl(e.target.value)}/>
         <button>search</button>
      </div>
      <p className="read-the-docs">
      Faça downloads de seus vídeos e playlists 
      </p>
      <VideoOpen />
      <br />
      <button onClick={download} >Download</button>
    </div>
  )
}

export default App
