import React, { cloneElement } from "react";

const style = {
	width: '100%',
	maxWidth: 1000,
	margin: '0 auto',
}

export default ({ children, renderer = <div /> }) => {
	return cloneElement(renderer, {
		style: Object.assign({}, style, renderer.props.style),
		className: renderer.props.className,
		children
	})
}