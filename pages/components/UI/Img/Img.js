import React from 'react';

export default function Img({ className, src, alt, width, height }) {
	return <img src={src} className={className} alt={alt} width={width} height={height} />;
}
