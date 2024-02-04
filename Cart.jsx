import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // console.log('location',location);

  const [data, setData] = useState({
    ID: location.state.ID,
    Name: location.state.Name,
    CategoryName: location.state.CategoryName,
    Price: location.state.Price,
    Image: location.state.Image,
    Description: location.state.Description
  })

  return (
    <>
      <section className="main-card--cointainer">
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">setData{data.ID}</span>
                    <span className="card-author subtle">setData{data.CategoryName}</span>
                    <h2 className="card-title">setData{data.Name} </h2>
                    <span className="card-description subtle">
                     setData{data.Description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={setData(data.Image)} alt="images" className="card-media" />
                  <span className="card-author subtle"> setData{data.Price}</span>
                  {/* <button onClick={()=>gotoContact()}> go to Home page </button> */}
                  <button onClick={() => (navigate(-1))}> go to Back</button>
                </div>
              </div>
      </section>
    </>
  );
}

export default Cart