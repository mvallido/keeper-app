import React from "react";

function Footer(){
    var date = new Date();
    var currentYear = date.getFullYear();

    return(
        <footer>
         <p>{currentYear}</p>
        </footer>
    )
}

export default Footer;