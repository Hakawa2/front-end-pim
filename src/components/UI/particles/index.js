import React from "react";
import Particles from "react-particles-js";

const ParticlesContainer = () => (
	<div
	  style={{
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%"
	  }}
	>
		<Particles
			params={{
				"particles": {
					"number": {
						"value": 80,
						"density": {
							"enable": true,
							"value_area": 800
						  }
					},
					"size": {
						"value": 3
					},
					"color": {
						"value": "#1091c4"
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						}
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 300,
					"color": "#7502ab",
					"opacity": 0.4,
					"width": 2
				}
			}}
		/>
	</div>
)

export default ParticlesContainer