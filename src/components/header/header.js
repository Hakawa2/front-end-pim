import React, { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "react-responsive";

import MenuResponsive from "./responsive/menu";

//css
import "./header.css";

//img
import logo from "../../img/logo.png";
import menu from "../../img/menu.png"

const Header = ({ close, showMenu, open }) => {
	const [isSticky, setSticky] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {setSticky(ref.current.getBoundingClientRect().top <= 0);};
	const mobile = useMediaQuery({ query: "(max-device-width: 840px)" })
	const pages = [ "home", "sobre", "planos" ];

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	
		return () => {
		  window.removeEventListener("scroll", () => handleScroll);
		};
	}, []);

	return (
		<div className={`header-container${isSticky ? " sticky" : ""} ${open ? "hide-menu" : "" }`} ref={ref}>
			{!open ? <div className="nav-logo">
				<div className="container">
					{mobile ? 
						<div className="mobile-header-container">
							<img onClick={mobile && (() => showMenu())} src={menu}/>
							<img src={logo}/>
						</div> : <AnchorLink href={"#home"}><img src={logo}/></AnchorLink> }
					{!mobile && <div>
						<AnchorLink href='#home'>Home</AnchorLink>
						<AnchorLink href='#sobre'>Sobre</AnchorLink>
						<AnchorLink href='#planos'>Planos</AnchorLink>
					</div>}
				</div>
			</div>: 
				<MenuResponsive pages={pages} close={() => close()} open={open}/>}
		</div>
	);
};

export default Header;
