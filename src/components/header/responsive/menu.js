import React,{ useEffect } from "react"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const MenuResponsive = ({ open, close }) => {
	
	return(
		<SlidingPane
			isOpen={open}
			onRequestClose={() => close()}
			from='left'>
			<div>
			dsdasdasdasdasdsdasdsa
			</div>
		</SlidingPane>
	)
}

export default MenuResponsive