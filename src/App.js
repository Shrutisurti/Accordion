import logo from './logo.svg';
import './App.css';
import {datas} from './Content';
import { useState } from 'react';


function App() {
  const [selected,setSelected] = useState(null);

  const toggle = (i) =>{
   if(selected===i)
   {
     return setSelected (null)
   }
   setSelected(i);
  }
  return (
    <div className="wrapper">
      <div className="accordion">
        {datas.map((items,i)=>(
           <div className='item' key={items.id}>
            <div className='title' onClick={()=>toggle(i)}>
         
              <h2>{items.title}</h2>
            
              <span>{selected === i ? '-' : '+' }</span>
            </div>
            <div 
            className={
              selected === i ? 'content show' : 'content'
            }
             >
              {items.content}
            </div>
           </div>
        ))}
      </div>
    </div>
  );
}

export default App;
