import React from "react";
import SideBar from "../SideBar";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const MovieComponent = () => {
    return(
        <>
        <div className="col-components">
            <div className="components">Movies</div>
            <div className="row">
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
            </div>
            
            <div className="row">
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
            </div>
            <div className="row">
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
                <div className="col-sm">Some Text</div>
            </div>
        </div>

        </>
    )
}
 export default MovieComponent;