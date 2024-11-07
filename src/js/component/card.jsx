import React from "react";

const Card = () => {
    return(
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cw8H6KpFUOiEaZFJWxVSWr77Mylr-KnMAw&s" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
    );
};

export default Card;