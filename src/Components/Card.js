import React from "react";

const Card = () => {
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">BREAKFAST</h5>
       
        //for dropdown menu view
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            View Menu
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>


        <a href="#" className="btn btn-primary">
          Add in Your Food
        </a>
      </div>
    </div>
  );
};
export default Card;
