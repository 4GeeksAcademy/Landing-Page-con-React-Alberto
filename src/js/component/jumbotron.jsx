import React from "react";

const Jumbotron = () => {
    return(
        <div className="jumbotron">
          <h1 className="display-4">A Warm Welcome!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
          </p>
        </div>
    );
};

export default Jumbotron;