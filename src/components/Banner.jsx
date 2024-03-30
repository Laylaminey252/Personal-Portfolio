import React from "react";
import '../Global.css'
import myimage from '../assets/leyla.jpg'

function Banner(){

     return(
        <div className="body">
           <div className="bannerSec1">
          <h1>Hi There,</h1>
          <h2>I am <span className="span"> Leyla</span> </h2>
          <h3>I am Graphic Designer</h3>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn">Get resume</button>
          <button className="btn">contact me</button>


          </div>
<div className="bodySec2">
    <img src={myimage} alt="" />
    </div> 

</div>
     )
}

export default Banner;
