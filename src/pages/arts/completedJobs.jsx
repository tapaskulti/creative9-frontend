import { useState } from "react";
import { Link } from "react-router-dom";

function CompletedJos() {

    return(
        <div>
            <input type="textarea" />
            <Link to="/"><button className="bg-green-600 text-white text-base px-3 py-1.5">Submit</button></Link>
        </div>
    )
}

export default CompletedJos;