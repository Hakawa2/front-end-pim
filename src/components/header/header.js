import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "react-responsive";

import MenuResponsive from "./responsive/menu";

//css
import "./header.css";

//img


const Header = ({close, showMenu, open}) => {

	const mobile = useMediaQuery({ query: "(max-device-width: 840px)" })

	return (
		<div className="header-container">
			<div className="nav-logo container">
				<AnchorLink href='#home' onClick={mobile && (() => showMenu())}>logo</AnchorLink>
				{mobile ? <MenuResponsive close={() => close()} open={open}/> : <div>
					<AnchorLink href='#home'>Home</AnchorLink>
					<AnchorLink href='#sobre'>Sobre</AnchorLink>
					<AnchorLink href='#planos'>Planos</AnchorLink>
				</div>}
				
			</div>
		</div>
	);
};

export default Header;
