import React from 'react';
import P1 from '../UI/P1/P1';

export default function ShopBeautySection() {
	return (
		<div>
			<div className="shop-beauty container">
				<p className="h1 text-uppercase text-center title">A Whole new way to Shop Beauty</p>
			</div>
			<style jsx>
				{`
					@media (max-width: 560px) {
						.title {
							font-size: 1rem;
							color: #e42213 !important;
							font-weight: 700;
						}
					}
					.title {
						font-size: 3.5rem;
						color: #e42213 !important;
						font-weight: 700;
					}
				`}
			</style>
		</div>
	);
}
