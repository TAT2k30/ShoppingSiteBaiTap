import React, { useState } from 'react';

import './img.css'
function ShowItemComponent(props) {
  const { type } = props;
  const text = type || "Please select a category";
  const components = {
    BASKETBALL_SHOES: <BasketballShoes />,
    FOOD: <Food />,
    DRINKS: <Drinks />,
    CLOTHES: <Clothes />,
    CELL_PHONES: <CellPhones />,
    BASKETBALL: <Basketball />,
  };

  const Component = components[type];

  return (
    <>
   
      <h1 style={{ color: "white", fontWeight: "bolder" }}>{text}</h1>

      <hr style={{ border: "solid 3px black " }} />

      {Component}
    </>
  );
}

const BasketballShoes = () => {
  const shoes = products.shoes;
  return (
    <>
  
      <ProductList products={shoes} />
    </>
  );
};

function Food() {
  const food = products.food;
  return (
    <>
      
      <ProductList products={food} />
    </>
  );
}

function Drinks() {
  const drink = products.drink
  return (
    <>

      <ProductList products={drink}/>
    </>
  );
}

function Clothes() {
  return (
    <>
      
      <p>Clothes</p>
    </>
  );
}

function CellPhones() {
  return (
    <>
      
      <p>Cell Phones</p>
    </>
  );
}

function Basketball() {
  return (
    <>
      
      <p>Basketball</p>
    </>
  );
}




//---------------------ReUseable form component--------------------//
//tái sử dụng Form component aka"cái form 3x2 trên giao diện á bruh",
// đỡ tốn công cứ mỗi component Basketball hay food drinks các thứ thì dùng lại 1 núi xml



 
 
  const ProductList = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredProducts = props.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
       //Phải ghi y chang name (còn fix...)
    );
  
    return (
      <div>
        <input
          style={{width: "50%"}}
          type="text"
          placeholder="Search products by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <main className="cards">
          {filteredProducts.map((product) => (
            <article className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="text">
                <hr />
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <price>{product.price},00 $USD</price>
              </div>
            </article>
          ))}
        </main>
      </div>
    );
  };







//Data JSON
const products = {
  shoes: [
    {
      id: 1,
      name: "Nike - GT CUT 2",
      image: "https://authentic-shoes.com/wp-content/uploads/2023/04/nike-zoom-gt-cut-2-black-desert_515f15c14fb74c13abce4cc5ddc05d9c.png",
      description: "The Nike Zoom GT Cut 2 is a much-anticipated basketball shoe because of the first edition’s awesomeness.",
      price: 170,
    },
    {
      id: 2,
      name: "Nike - PG 6",
      image: "https://authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2022.06.07_13.19.01.860_4bd6979b7a584a79940bcdc5ee7c1062.png",
      description: "The Nike PG 6 is one of the best basketball shoes for value. The support is fantastic, the fit is impressive, and the traction is reliable",
      price: 120,
    },
    {
      id: 3,
      name: "Nike - Lebron 20",
      image: "https://authentic-shoes.com/wp-content/uploads/2023/04/nike-lebron-20-violet-frost-prod_943d55d45bf3457d985100a4a0419aa7.png",
      description: "The new Nike LeBron 20 is perhaps the first among the collection to be introduced as a low-top sneaker.",
      price: 200,
    },
    {
      id: 4,
      name: "Nike - KD 15",
      image: "https://authentic-shoes.com/wp-content/uploads/2023/04/dv1200-100-6_1200x1200_e3cecb458f0b4ab39d5c4f5f953bfa65.png",
      description: "Soft, full-length foam plus a visible Zoom Air Strobel unit provide a dual layer of cushioning that's soft, smooth and responsive.",
      price: 250,
    },
    {
      id: 5,
      name: "Puma - MB 02",
      image: "https://authentic-shoes.com/wp-content/uploads/2023/04/377411_02_s.png_82cce7e71c69463385992bc4982e4e1e-768x399.png",
      description: "The MB.02. This version is just as disruptive as the first, just as bold, and just as Melo.",
      price: 140,
    },
    {
      id: 6,
      name: "Nike - ReactX Infinity 4",
      image: "https://authentic-shoes.com/wp-content/uploads/2023/07/Nike-ReactX-Infinity-Run-4-White.jpg",
      description: "Nike React is an unprecedented foam cushioning innovation and our most responsive foam yet.",
      price: 220,
    },
  ],
  food: [
    {
      id: 1,
      name: "Pizza",
      description: "A classic Italian dish made with a round, flattened base of leavened wheat-based dough topped with tomatoes...",
      price: 15,
      image: "https://wallpapers.net/web/wallpapers/delicious-pizza-hd-wallpaper/thumbnail/lg.jpg",
    },
    {
      id: 2,
      name: "Hamburger",
      description: "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bun or bread roll.",
      price: 10,
      image: "https://lh3.googleusercontent.com/p/AF1QipPVEIaZ-2EHqu2JZk-ltWdEjFav8ZIL-0kLwHWn=s1360-w1360-h1020",
    },
    {
      id: 3,
      name: "Sushi",
      description: "A Japanese dish of prepared vinegared rice, usually with seafood, vegetables, and sometimes tropical fruits.",
      price: 20,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/450px-Sushi_platter.jpg",
    },
    {
      id: 4,
      name: "Ice cream",
      description: "A frozen dessert made from a sweetened mixture of milk, cream, and flavorings.",
      price: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYGLFnrqX7-10aFEi34QbNpivpd6ip1cmEA&usqp=CAU",
    },
    {
      id: 5,
      name: "Chocolate",
      description: "A food product made from the roasted and ground seeds of the cacao tree.",
      price: 7,
      image: "https://images.arla.com/recordid/DA888149-8D8B-4D9B-84C749958CC545B7/chocolate-bars.jpg?width=1269&height=715&mode=crop&format=jpg",
    },
  
  ],
  drink: [
    {
      id: 1,
      name: "Revive trang",
      description: "Sản phẩm của công ty Suntory Pepsico Việt Nam. Uốn sau các buổi tập thể thao thì quá đã pepsi ơi.",
      price: 1,
      image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-vmmwgklv70jv52",
    },
    {
      id: 2,
      name: "Prime",
      description: "The sports drinks, described by the manufacturer as hydration drinks, are made up of 10 percent coconut water and contain electrolytes, B vitamins and BCAAs.",
      price: 3,
      image: "https://drinkprime.com/cdn/shop/files/Original-Ext-Navigation-Banner_370x230@2x.png?v=1695912567",
    },
    {
      id: 3,
      name: "Powerade Mountain Berry Blast",
      description: "This drink contains a tremendous amount of sugar, as the second and the fourth ingredients on the list.",
      price: 19,
      image: "https://www.insidehook.com/wp-content/uploads/2019/07/3-19.jpg?resize=1024%2C640",
    },
    {
      id: 4,
      name: "Scivatation Xtend",
      description: "L-Leucine (3.5g), L-Isoleucine (1.75g), L-Valine (1.75g), Electrolyte Blend (Sodium Citrate, Potassium Chloride, Sodium Chloride), Citrulline Malate (1:1) (1g)...",
      price: 6,
      image: "https://www.insidehook.com/wp-content/uploads/2019/07/6-7.jpg?resize=1024%2C640",
    },
    {
      id: 5,
      name: "Propel Flavored Electrolyte",
      description: "This product is highly processed and contains Ethylenediaminetetraacetic acid (EDTA)",
      price: 10,
      image: "https://www.insidehook.com/wp-content/uploads/2019/07/2-25.jpg?resize=1024%2C640",
    },
  
  ],
};
export default ShowItemComponent;