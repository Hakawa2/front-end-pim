import React from "react";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

//css
import "./index.css"

//imgs
import sobre from "../../img/devs.jpeg"

const Sobre = () => {
	const mobile = useMediaQuery({ query: "(max-device-width: 840px)" })
	return(
		<div className="sobre-header container">
			<div>
				<hr/>
				<h1>Quem Somos</h1>
			</div>
			<Row>
				<Col xs={12} md={6} lg={6}>
					<span className="texto-sobre-container">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada eros vel suscipit vulputate.
				Nam elit ante, pellentesque eget pellentesque ac, venenatis in velit. Donec eget nulla dapibus, ullamcorper sapien dapibus, mattis quam. 
				Donec eget neque sed massa faucibus laoreet. Fusce hendrerit enim a blandit pulvinar. Proin egestas id risus in scelerisque. 
				Quisque velit justo, lobortis et turpis at, condimentum cursus lectus. Integer eu fringilla tellus, in scelerisque purus. 
				Quisque quam nisi, aliquet eu congue et, scelerisque id massa. Maecenas convallis tortor elit, 
				vel vulputate augue laoreet eget. Maecenas euismod neque nec elit varius, maximus condimentum orci consectetur.
				Vestibulum vehicula sagittis odio. Quisque at felis arcu. Nam sit amet ante vel ante porta pharetra. 
				Quisque semper euismod enim at commodo. Praesent sit amet vestibulum enim. Phasellus in quam dolor. 
				Sed sed leo dapibus, mollis erat at, tincidunt sem. Nullam rutrum turpis vel erat imperdiet lobortis.
				Mauris nec massa sed sapien ultrices porttitor sit amet ac lectus. Fusce at tristique mauris.
					</span>
				</Col>
				{!mobile && <Col xs={12} md={6} lg={6}><img className="img-sobre-container" src={sobre}/></Col>}
			</Row>
		</div>
	)
}

export default Sobre;