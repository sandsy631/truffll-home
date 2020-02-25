import React from 'react';

export default function Logo() {
	return (
		<div>
			<img className="logo" src="/imgs/logo.png" alt="Truffll Logo" />
			<style jsx>
				{`
					div {
						position: absolute;
						top: 0;
					}
					.logo {
						width: 200px;
						height: 200px;
					}
					@media (max-width: 560px) {
					}
				`}
			</style>
		</div>
	);
}
