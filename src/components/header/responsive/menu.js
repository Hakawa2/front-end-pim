import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


//css
import "./menu.css"

const MenuResponsive = ({ open, close, pages }) => {

	return(
		<SlidingPane
			isOpen={open}
			onRequestClose={() => close()}
			className='menu-container'
			title="Páginas"
			from='left'>
			{pages.map((paginas) => {
				return(
					<div className="pages-container" key={paginas}>
						<AnchorLink href={`#${paginas}`} onClick={() => close()}>{paginas}</AnchorLink>
					</div>
				)
			})}
		</SlidingPane>
	)
}

export default MenuResponsive