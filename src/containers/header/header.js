import React, { useState } from "react";
import Header from "../../components/header/header";

const HeaderContainer = () => {
	const [ open, setOpen ] = useState(false);

	const showMenu = () => {
		setOpen(true)
	}
	
	const closeMenu = () => {
		setOpen(false)
	}

	return(
		<Header
			open={open}
			showMenu={() => showMenu()}
			close={() => closeMenu()}/>
	)
}

export default HeaderContainer