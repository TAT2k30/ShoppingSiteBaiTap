
import ShowItemComponent from './ShowItemComponent';
import './App.css';
import { useState } from 'react';

function App() {
  const [categoryType, setCategoryType] = useState("");

  const handleClick = (event) => {
        const buttonId = event.target.id;
        setCategoryType(buttonId);
      
      };
  return (
    <div className="App">
      <h1 className="bg-warning" style={{border:"solid 3px", padding:"0px 0px 6px 0px", marginBottom:"0px"}}>Shopping site</h1>
      
      <div style={{float: "left", width:"30%", height:"1000px", background:"#F3587A",border:"solid 3px"}}>
      <h1 style={{ color: "white" }}>Categories</h1>
      <hr style={{ border: "solid black 3px" }}></hr>
      <div>
        <button onClick={handleClick}
                id='BASKETBALL_SHOES'
                className='btn btn-primary'
                style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%",border:"solid" }}>
                Basketball Shoes
        </button>
        <button onClick={handleClick}
                id='FOOD'
                className='btn btn-primary' 
                style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
                Food
        </button>
        <button onClick={handleClick}
                id='DRINKS'
                className='btn btn-primary' 
                style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
                Drinks
        </button>
        <button onClick={handleClick}
                id='CLOTHES'
                className='btn btn-primary' 
                style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
                Clothes
        </button>
        <button onClick={handleClick}
                id='CELL_PHONES'
                className='btn btn-primary' 
                style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
                Cell Phones
        </button>
        <button onClick={handleClick}
                id='BASKETBALL'
                className='btn btn-primary' 
                style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
                Basketball
        </button>
       {/* <div className='bg-success'>
       <hr style={{ borderBottom: "solid black 5px" }}></hr>
        <h1 style={{ color: "white" }}>Other cool features</h1>
        <hr style={{ borderBottom: "solid black 5px" }}></hr>
       </div> */}
                
      </div>
        
         
      </div>
      <div style={{float: "right", width:"70%", height:"1000px", background:"#90D0EC", border:"solid 3px"}}>
        
          <ShowItemComponent type = {categoryType}/>
      </div>
    </div>
  );
}

export default App;
