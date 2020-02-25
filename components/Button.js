import React from 'react';

export default function Button({ variant, children }) {
	return (
		<button className="button">
			{children}
			<style jsx>
				{`
					.button {
						color: white;
						border: 0;
						background: ${variant === 'primary' ? '#e42313' : '#000'};
						padding: 10px 15px;
						text-transform: uppercase;
						font-weight: 600;
					}
				`}
			</style>
		</button>
	);
}
