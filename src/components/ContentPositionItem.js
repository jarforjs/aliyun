import React from "react";

const itemStyle = { width: 360, display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }

export default ({ item: { title, address, time }, index}) => (
	<div key={`${title}-${index}`}>
		<div style={{ display: 'flex', justifyContent: 'space-between', height: 40 }}>
			<a href="#" style={itemStyle}>{title}</a>
			<span>{address}</span>
			<span>{time}</span>
		</div>
	</div>
)