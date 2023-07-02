import {BsFacebook} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {TiSocialTwitterCircular} from "react-icons/ti"
import pp from "../assets/images/lp2.jpg"
import ppp from "../assets/images/bolb.png"
import mm from "../assets/images/lp3.jpg"
import mmm from "../assets/images/lp4.jpg"
import mmmm from "../assets/images/lp5.jpg"
import mmmmm from "../assets/images/beb.png"
import st from "../assets/images/p4.jpg"
import md from "../assets/images/p5.jpg"
import co from "../assets/images/p3.png"
import xy from "../assets/images/p2.jpg"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { render } from 'react-dom';
const LandingPage =()=>{
    return(
        <div>
            <div className="bg-pp w-[100%] h-[100%] bg-cover bg-center bg-no-repeat absolute"/>
        <div className="relative flex w-[100%] h-[100vh] justify-center items-center flex-col">
            <div className="bg-pp w-[100%] h-[150vh] bg-cover bg-center bg-no-repeat absolute"/>
            <div className="absolute flex w-[90%] justify-between items-center  mt-[100px]">
                <div id="home">
                    <div className="text-white text-[22px]">FULL STACK DEVELOPER</div>
                    <div className="w-[100px] text-white text-[90px]">JAJI YUSUF</div>
                    <div className="w-[300px] text-white text-[15px]">My name is jaji yusuf, I am a highly skilled and passionate full-stack developer with expertise in building robust and scalable web applications. With 3 years of experience in the field.</div>
                </div>
                <div className="absolute left-[400px] top-[-20px]">
                    <img src={mmmmm} alt="" style={{"width":"650px"}} />
                                  </div>
                <div>
                <div className="text-[30px] flex justify-between flex-col h-[350px] text-white">
                <a href="https://github.com/Yusufola157">
                <AiFillGithub/>
                </a>
                <a href=" https://www.facebook.com/profile.php?id=100084000948093">
                <BsFacebook/>
                </a>
                <a href="https://twitter.com/jajiCode">
                <TiSocialTwitterCircular/>
                </a>
                    </div>
                </div>
            </div>
            <div className="absolute text-white text-[40px] left-[1080px] top-[90px]">X</div>
            <div className="absolute text-white text-[40px] right-[900px] bottom-0">X</div>
            {/* <div className="absolute w-[100px]  z-50 left-[1000px] top-[200px]">
                <img src={ppp} alt="" />
            </div> */}
        </div>
        <div className="relative flex w-[100%] h-[100vh] justify-center items-center flex-col">
            {/* <div className="bg-pp w-[100%] h-[100vh] bg-cover bg-center bg-no-repeat absolute"/> */}
            <div className="absolute flex w-[70%] justify-around items-center mt-[500px]">
                <div className="relative">
                <img src={mm} alt="" style={{"width":"400px","height":"400px", "borderRadius":"50%"}} />
                <div className="absolute z-40 text-white text-[50px] top-0 left-[300px] font-bold">
                   <div id="about">About <br/>me</div>
                </div>
                <div className="absolute w-[100px]  z-50  top-[300px]">
                <img src={ppp} alt="" />
            </div>
                </div>
                <div>
                <div className="">
                      
                    </div>
                 <div className="flex flex-col  mt-[100px]">
                 <div className="w-[600px] text-white mt-[180px]">
                 "Hi there! My name is JAJI YUSUF, and I'm a passionate full-stack developer. With 3 years of experience in the industry, I have honed my skills in both front-end and back-end development. On the front-end, I love crafting engaging and user-friendly interfaces using HTML, CSS, and JavaScript. I am well-versed in popular frameworks like React, ensuring seamless experiences across different platforms. When it comes to the back-end, I thrive on building robust server-side solutions. I have expertise in languages like Node.js and i can design efficient database structures using MongoDB. Creating RESTful APIs and integrating third-party services are also among my strengths. I take pride in my problem-solving abilities and attention to detail, ensuring clean and maintainable code. As a team player, I communicate effectively and adapt to changing project requirements, always striving for excellence. I am excited about the endless possibilities in the world of software development and look forward to contributing my skills to meaningful projects. Let's create something amazing together!"
                    </div>
                   
                    <FloatingWhatsApp phoneNumber="+123 9057287824" accountName="jaji yusuf" />
                   
                 </div>
                </div>

            </div>
        </div>

        <div className="relative flex w-[100%] h-[60vh] justify-center items-center  z-[99] mt-[500px]">
        {/* <div className="bg-pp w-[100%] h-[100%] bg-cover bg-center bg-no-repeat absolute"/> */}
        <div id="skills" className="absolute">
                <div className="text-[50px] font-bold text-white z-[999]">My skills</div>
           <div className="flex justify-around items-center w-[90%]">
            <div className="flex justify-center items-center mr-[300px]">
                <div>
                    <div className="text-white my-[5px] mr-[50px]">Tailwind</div>
                    <div className="text-white my-[5px] mr-[50px]">css</div>
                    <div className="text-white my-[5px] mr-[50px]">React</div>
                    <div className="text-white my-[5px] mr-[50px]">Redux</div>
                    <div className="text-white my-[5px] mr-[50px]">Recoil</div>
                    <div className="text-white my-[5px] mr-[50px]">Tanstack</div>
                    <div className="text-white my-[5px] mr-[50px]">MicroFrontend</div>
                    <div className="text-white my-[5px] mr-[50px]">NodeJs</div>
                    <div className="text-white my-[5px] mr-[50px]">Html</div>
                    <div className="text-white my-[5px] mr-[50px]">TypeScript</div>
                  </div>
                <div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                   
                    </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div className="text-white my-[5px] mr-[50px]">Express</div>
                    <div className="text-white my-[5px] mr-[50px]">Bcrypt</div>
                    <div className="text-white my-[5px] mr-[50px]">JWT</div>
                    <div className="text-white my-[5px] mr-[50px]">Logging</div>
                    <div className="text-white my-[5px] mr-[50px]">TypeScript</div>
                    <div className="text-white my-[5px] mr-[50px]">ErrorHandler</div>
                    <div className="text-white my-[5px] mr-[50px]">AsyncHandler</div>
                    <div className="text-white my-[5px] mr-[50px]">Environment</div>
                    <div className="text-white my-[5px] mr-[50px]">MongoDb</div>
                  </div>
                <div>
                <div className="flex justify-center items-center my-[20px]">
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#484948d5] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                <div className="flex justify-center items-center my-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#21fa1a] mx-[5px]"></div>
                </div>
                </div>
            </div>
           </div>
        </div>
        </div>
        <div className="relative w-[100%] h-[170vh] flex justify-center items-center mt-[300px]">
        {/* <div className="bg-pp w-[100%] h-[100%] bg-cover bg-center bg-no-repeat absolute flex justify-center"/> */}
           <div id="projects" className="flex w-[50%] h-[70%] flex-col">
           <div className="absolute text-white text-[45px] font-bold top-4">My Projects</div>
            <div className="absolute flex w-[500px] flex-col">
                <div className="relative">
                   <div className="w-[400px] h-[180px] bg-[#123456] rounded-[20px] overflow-hidden flex justify-center items-center">
                    <img src={co} alt="" style={{"width":"200px"}} />
                   </div>
                   <div className="text-white font-bold absolute right-0 top-0 text-[25px]">Alajo Online</div>
                </div>
                <div className="relative top-[50px] left-[500px]">
                   <div className="w-[400px] h-[180px] bg-[#4dd823] rounded-[20px] overflow-hidden flex justify-center items-center">
                   <img src={xy} alt="" style={{"width":"200px"}}/>
                   </div>
                   <div className="text-white font-bold absolute left-[350px] top-0 text-[25px]">ecoBIN</div>
                </div>
                <div className="relative top-[100px]">
                   <div className="w-[400px] h-[180px] bg-[#2233ce] rounded-[20px] overflow-hidden flex justify-center items-center">
                   <img src={st} alt="" style={{"width":"200px"}}/>
                   </div>
                   <div className="text-white font-bold absolute left-[350px] top-0 text-[25px]">Eazy HR</div>
                </div>
                <div className="relative top-[150px] left-[500px]">
                   <div className="w-[400px] h-[180px] bg-[#1d1c16] rounded-[20px]  overflow-hidden flex justify-center items-center">
                   <img src={md} alt="" style={{"width":"200px"}}/>
                   </div>
                   <div className="text-white font-bold absolute left-[350px] top-0 text-[25px]">Lyfe care</div>
                </div>
            </div>
           </div>
        </div>
        <div className="relative w-[100%] h-[200vh] flex justify-center items-center">
        {/* <div className="bg-pp w-[100%] h-[100%] bg-cover bg-center bg-no-repeat absolute flex justify-center"/> */}
        <div id="blog" className="flex w-[50%] h-[70%] flex-col">
        <div className="absolute text-white text-[45px] font-bold top-4">My Blog</div>
           <div className="w-[100%] flex justify-center items-center absolute left-0">
             <div className="w-[1000px] absolute top-[-100px]  flex justify-between items-center flex-wrap">
             <div className="flex w-[450px] h-[700px]  justify-center flex-col">
               <div className="flex w-[450px] h-[450px] justify-between flex-col ">
               <div className="w-[100%] h-[270px]">
                <img src={pp} alt="" style={{"width":"100%","height":"100%","backgroundSize":"cover","backgroundPosition":"center"}} />
               </div>
<div className="">
             <div className="flex h-[50%]">
                    <div className="text-[23px] text-white font-bold ">
                        React Suspense and React Lazy By examples
                    </div>
               </div>
               <div className="text-white text-[13px] ">
               Let’s briefly explain React Suspense and React Lazy with examples:

React Suspense: React Suspense is a feature in React that allows you to handle asynchronous operations (like data fetching) and code-splitting in a more declarative way. It allows components to “suspend” rendering until a specific condition is met, such as until the required data is loaded.
               </div>
               <div className="text-[#d5f547] mt-[10px] ">
                <a href="https://medium.com/@yusufjaji/react-suspense-and-react-lazy-by-examples-185bd0023d6d">
                Read more
                </a>
               </div>
</div>
              </div>
              </div>
             <div className="flex w-[450px] h-[450px] justify-between flex-col ">
               <div className="w-[100%] h-[270px]">
                <img src={mmmm} alt="" style={{"width":"100%","height":"100%","backgroundSize":"cover","backgroundPosition":"center"}} />
               </div>
<div className="">
             <div className="flex h-[50%]">
                    <div className="text-[23px] text-white font-bold ">
                        Managing State with useReducer,  useState
                    </div>
               </div>
               <div className="text-white text-[13px] ">
               useReducer: useReducer is a React hook that provides an alternative way to manage complex state logic. It is particularly useful when state transitions involve multiple actions and when the state is more complex or needs to be shared across multiple components.
               </div>
               <div className="text-[#d5f547] mt-[10px] ">
                <a href="https://medium.com/@yusufjaji/managing-state-with-usereducer-usestate-62afcfb1136">
                Read more
                </a>
               </div>
</div>
              </div>
             <div className="flex w-[450px] h-[450px] justify-between flex-col ">
               <div className="w-[100%] h-[270px]">
                <img src={mmmm} alt="" style={{"width":"100%","height":"100%","backgroundSize":"cover","backgroundPosition":"center"}} />
               </div>
<div className="">
             <div className="flex h-[50%]">
                    <div className="text-[23px] text-white font-bold ">
                      Things to know about ES6 before learning React
                    </div>
               </div>
               <div className="text-white text-[13px] ">
               Certainly! Here are some important things to know about ES6 (ECMAScript 2015) before diving into learning React:

Arrow Functions: ES6 introduced arrow functions, which provide a more concise syntax for writing functions. They have lexical scoping and do not bind their own this value.
               </div>
               <div className="text-[#d5f547] mt-[10px] ">
                <a href="https://medium.com/@yusufjaji/things-to-know-about-es6-before-learning-react-cfa23a645360"> Read more</a>
               </div>
</div>
              </div>
              <div className="flex w-[450px] h-[450px] justify-between flex-col ">
               <div className="w-[100%] h-[270px]">
                <img src={mmm} alt="" style={{"width":"100%","height":"100%","backgroundSize":"cover","backgroundPosition":"center"}} />
               </div>
<div className="">
             <div className="flex h-[50%]">
                    <div className="text-[23px] text-white font-bold ">
                        What are the difference between TypeScript and JavaScript
                    </div>
               </div>
               <div className="text-white text-[13px] ">
               Here’s a note highlighting the differences between TypeScript and JavaScript:

Type System: TypeScript is a superset of JavaScript that introduces a static type system. JavaScript, on the other hand, is dynamically typed.
               </div>
               <div className="text-[#d5f547] mt-[10px] ">
                <a href="https://medium.com/@yusufjaji/what-are-the-difference-between-typescript-and-javascript-1079c2bda359">Read more</a>
               </div>
</div>
              </div>
             </div>
           </div>
        </div>
        </div>
        </div>
    )
}
render(<LandingPage />, document.getElementById('root'));
export default LandingPage