import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

import { BsLockFill} from "react-icons/bs";

import * as Icon from "react-bootstrap-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
export function SideBar() {
	const [sideBar, setSideBar] = useState(false);

	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container style={{backgroundColor: "black"}}>
			<Content >
				 
					<OpenSideBar style={{backgroundColor: "black"}}>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar} style={{backgroundColor:"transparent"}}>
                                    <Icon.ArrowLeft size={"30"} style={{color:"white"}} />
									</button>
								</span>
								<div>
                               
									<h1>logo </h1>
								</div>

								{/* Icones principais do app */}
                                <div >
								<ul>
									<a href="/" >
										<Icon.CardText size={"50"} style={{color:"white "}}/>
										<p style={{fontSize:"20px",color:"white",fontFamily:"cursive"}}>Assignment</p>
									</a>
									<a href="/" title="Alguma coisa">
										<Icon.ChatFill style={{color:"white"}}/>
										<p style={{fontSize:"25px",color:"white",fontFamily:"fantasy"}}>Q&A</p>
									</a>
									<a href="/" title="Alguma coisa">
										<Icon.CardChecklist style={{color:"white"}}/>
										<p style={{fontSize:"25px",color:"white",fontFamily:"monospace"}}>Quiz</p>
									</a>
									<a href="/" title="Alguma coisa">
										<Icon.Flag style={{color:"white"}}/>
										<p style={{fontSize:"25spx",color:"white",fontFamily:"sans-serif"}}>Feedback</p>
									</a>
								</ul>
                                </div>
							</nav>
                            <div >
								{/* Icones que pode não ser tão principais no app */}
								<ul style={{marginLeft:"22%"}}>
									<a href="/" style={{fontFamily:"Abril Fatface"}}>
										<Icon.Sliders style={{color:"#836eaa"}}/>
										<p  style={{fontSize:"20px",color:"white",fontFamily:"revert-layer"}}>Setting</p>
									</a>
									<a href="/">
										<Icon.PersonCircle style={{color:"#836eaa"}} />
										<p  style={{fontSize:"20px",color:"white",fontFamily:"serif"}}>Profile</p>
									</a>
									
								</ul>
                                </div>  
								<span>
									{/* <img src={userImg} alt="Eu" /> */}
									
								</span>
							
                            
						</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				
			</Content>
		</Container>
	);
				}
