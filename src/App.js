import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Post from './components/Post'
import Status from './components/Status'
import StatusEditor from './components/StatusEditor'

function App() {
  const [currentStatus, setCurrentStatus] = useState("Feeling like it's time to Code!!")
  return (
    <div className="App">
      <Navbar />
      <Status status={currentStatus}/>
      <StatusEditor setCurrentStatus={setCurrentStatus}/>
      <header className="App-header">
        <Post 
          date="5/12" 
          title="Hello World" 
          content="This is the content." 
        />
        <Post
          date="5/13"
          title="My first blog post!"
          content="This is the content."        
        />
          
        <Post 
          date='5/14'
          title='Intro to react!'
          content='Today I started learning react!'
      />

        
      </header>
    </div>
  );
}

export default App;
