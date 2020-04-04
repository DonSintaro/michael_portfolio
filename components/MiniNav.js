import React, { useState } from "react";
import DisplayPortfolio from "./DisplayPortfolio.js"


export default function MiniNav(){

return <>

<div className="container miniNav">
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked/> Detailed
    </label>
    <label className="btn btn-secondary">
        <input type="radio" name="options" id="option3" autocomplete="off"/> Grid
    </label>
    </div> 
</div>





</>

}