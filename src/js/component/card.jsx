import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";


const Card = () => {
    return (
        <div className="card col-12 col-sm-6">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic assumenda, aliquam, totam deserunt culpa ab sed veritatis nam consectetur aperiam ipsum sit porro cumque eos unde. Aut soluta adipisci exercitationem!.</p>
            </div>
            <hr/>
            
            <div className="d-grid gap-2 col-12 mx-auto">
              <button className="btn btn-primary" type="button">Find out more</button>
            </div>
        </div>
    );
};

export default Card;