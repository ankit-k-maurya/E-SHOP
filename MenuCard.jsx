import React from "react";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ menuData }) => {

  //   console.log(menuData);

   const navigate = useNavigate();

    const gotoResturant = (ID,Name,CategoryName,Price,Description,Image) =>{
       navigate("/Cart",{state:{
        ID:ID,
        Name:Name,
        CategoryName:CategoryName,
        Price:Price,
        Image:Image,
        Description:Description
       }
       });
    }

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { ID:id ,Name:name, CategoryName:category, Price:price, Image:image, Description:description } = curElem;
          return (
            <>
              <div className="card-container">
                <div className="card " key={id}>
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-author subtle"> {price}</span>
                  {/* <button className="card-tag  subtle" onClick={gotoResturant}>Add to Cart </button> */}
                  <button className="card-tag  subtle" onClick={() => gotoResturant(id ,name,category,price,image,description)} >Add to Cart </button> 
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
