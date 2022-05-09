import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Show from './components/decorator';
// import Sync from './components/sync/Sync';
import Hook from './components/hook'
import RenderPropsComponent from './components/RenderProps';

function App() {
  return (
    <div className="App">
      {/* <Show name={'chenjuntao'}></Show> */}
      {/* <Sync></Sync> */}
      <Hook></Hook>
      {/* <RenderPropsComponent
        render={
          (data:string) => {
            return (
              <h1>{data}</h1>
            )
          }
        }
      ></RenderPropsComponent> */}
        <ul>
      {
        new Array(30000).fill(1).map((_, index) => {
          return (
            <li key={index}>
              {index}
            </li>
          )
        })
      }
        </ul>
    </div>
  );
}

export default App;
