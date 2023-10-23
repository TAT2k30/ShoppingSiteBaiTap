// import React, { useState } from 'react';
// import ShowItemComponent from './ShowItemComponent';

// function MenuComponent(props) {
//   const [categoryType, setCategoryType] = useState("");

//   const handleClick = (event) => {
//         const buttonId = event.target.id;
//         setCategoryType(buttonId);
      
//       };

//   return (
//     <>
//       <h1 style={{ color: "white" }}>Categories</h1><hr style={{ borderBottom: "solid black 5px" }}></hr>
//       <div>
//         <button onClick={handleClick}
//                 id='basketballShoses'
//                 className='btn btn-primary'
//                 style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%",border:"solid" }}>
//                 Basketball Shoes
//         </button>
//         <button onClick={handleClick}
//                 id='food'
//                 className='btn btn-primary' 
//                 style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
//                 Food
//         </button>
//         <button onClick={handleClick}
//                 id='drinks'
//                 className='btn btn-primary' 
//                 style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
//                 Drinks
//         </button>
//         <button onClick={handleClick}
//                 id='clothes'
//                 className='btn btn-primary' 
//                 style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
//                 Clothes
//         </button>
//         <button onClick={handleClick}
//                 id='cellPhones'
//                 className='btn btn-primary' 
//                 style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
//                 Cell Phones
//         </button>
//         <button onClick={handleClick}
//                 id='basketball'
//                 className='btn btn-primary' 
//                 style={{ fontWeight: "bolder", display: "block",margin:"auto",marginBottom:"10px", width: "60%", border:"solid"}}>
//                 Basketball
//         </button>
//         <ShowItemComponent type={categoryType}/>
                
//       </div>
    
//     </>
//   );
// }

// export default MenuComponent;