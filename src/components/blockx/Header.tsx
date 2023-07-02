import pdf from "../../assets/images/cv.pdf"

import React from "react";
import { Link } from "react-scroll";


const Header =()=>{
    const [show, setShow] = React.useState(false);
    const View = () => {
      if (window.scrollY >= 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", View);
    return(
        <>
        {show ? (
            <div className="flex justify-center items-center w-[100%] h-[80px] bg-white fixed z-[9999999]">
            <div className="flex justify-between items-center w-[90%] h-[50px]">
              <div className="text-black font-bold text-[25px]">
                  LOGO
              </div>
             <div className="flex justify-center items-center text-white">
                <Link offset={-200} smooth={true} duration={500} to="home" style={{"color":"black","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Home</Link>
                <Link offset={-100} smooth={true} duration={500} to="about" style={{"color":"black","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>About</Link>
                <Link offset={-100} smooth={true} duration={500} to="skills" style={{"color":"black","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Skills</Link>
                <Link offset={-250} smooth={true} duration={500} to="projects" style={{"color":"black","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Projects</Link>
                <Link offset={-300} smooth={true} duration={500} to="blog" style={{"color":"black","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Blog</Link>
              </div> 
              <div   className="w-[140px] h-[40px] bg-purple-900 rounded flex justify-center items-center cursor-pointer">
                  <div className="text-white "><a href={pdf} download="CV">Download CV</a></div>
              </div>
            </div>
          </div>
        ):(
            <div className="flex justify-center items-center w-[100%] h-[80px] bg-none bg-transparent fixed z-[9999999] ">
          <div className="flex justify-between items-center w-[90%] h-[50px]">
            <div className="text-white font-bold text-[25px]">
                LOGO
            </div>
           <div className="flex justify-center items-center text-white">
           <Link offset={-200} smooth={true} duration={500} to="home" style={{"color":"white","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Home</Link>
           <Link offset={-100} smooth={true} duration={500} to="about" style={{"color":"white","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>About</Link>
           <Link offset={-100} smooth={true} duration={500} to="skills" style={{"color":"white","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Skills</Link>
           <Link offset={-250} smooth={true} duration={500} to="projects" style={{"color":"white","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Projects</Link>
           <Link offset={-300} smooth={true} duration={500} to="blog" style={{"color":"white","cursor":"pointer","margin":"0 20px","fontSize":"20px"}}>Blog</Link>
            </div> 
            <div   className="w-[140px] h-[40px] bg-purple-900 rounded flex justify-center items-center cursor-pointer">
                <div className="text-white "><a href={pdf} download="CV">Download CV</a></div>
            </div>
          </div>
        </div>
        )}
        </>
    )
}
export default Header