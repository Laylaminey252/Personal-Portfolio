import React from "react";
import '../Global.css'
import myimage from '../assets/HTML.jpg'
import my from '../assets/vedio-editing.jpg'
import image from '../assets/socialMedia.jpg'




function Projects(){
    return(
        <div id="Projects" className="Projects"> 
           
             <h1 >
                Projects
             </h1>
            <div className="ContainerProject" >
              <div className="Projec1">
                <img src={myimage} alt="" />
              <h2>Developing Website</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio 
                sequi provident ipsum necessitatibus obcaecati asperiores ad amet. Veniam, ex!</p>
             
              </div>
              <div className="Project2">
                <img src={my} alt="" />
                <h2>Vedio Editing</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio 
                sequi provident ipsum necessitatibus obcaecati asperiores ad amet. Veniam, ex!</p>
              </div>
              <div className="Project3">
                <img src={image} alt="" />
                <h2>Social Media  Markating</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio 
                sequi provident ipsum necessitatibus obcaecati asperiores ad amet. Veniam, ex!</p>
              </div>
            </div>

        </div>
    )

}

export default Projects;

