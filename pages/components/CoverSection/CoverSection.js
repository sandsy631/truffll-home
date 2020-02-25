import React from 'react';

export default function CoverSection() {
	return (
		<div>
			<div className="cover-section  d-flex  ">
				<div>
					<img src="/Cover.png" className="img-fluid cover-section__img position-relative" />
					<h1 className="cover-section__heading ">SHOP YOUR FAVOURITE BEAUTY PRODUCTS AT HOME </h1>
				</div>
			</div>
			<style jsx>
				{`
					.cover-section {
						max-height: 500px;
					}
				`}
			</style>
		</div>
	);
}
