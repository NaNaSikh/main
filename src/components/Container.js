import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import SideBar from "./SideBar";

const Container = () => {
    return(
        <div className="row">
            <div className="col-sm-3">
            <SideBar>

            </SideBar>
            </div>
            <div className="col-sm-9">
            <div class="row">
                <div class="col-sm">col-sm</div>
                <div class="col-sm">col-sm</div>
                <div class="col-sm">col-sm</div>
            </div>
            </div>
        </div>

    )
}

export default Container;