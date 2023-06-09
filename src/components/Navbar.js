import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
	return (
		<nav>
			<h1>Pixelia</h1>
			<div className={"links"}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Designs</Link>
			</div>
		</nav>
	)
}
