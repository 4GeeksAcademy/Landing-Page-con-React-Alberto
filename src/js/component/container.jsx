import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Container = () => {
    return(
        <div className="container">
            <Jumbotron/>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <Card />
                </div>
            </div>
        </div>
    ); 
};

export default Container;