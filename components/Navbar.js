import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { FaSistrix } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Logo from './Logo';

export default function Navbar() {
	return (
		<nav className="container navbar navbar-expand-lg navbar-light bg-white">
			<a className="navbar-brand" href="#">
				<Logo />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto text-right">
					<a className="nav-item nav-link" href="#">
						Login
					</a>
					<a className="nav-item nav-link" href="#">
						<FaSistrix />
					</a>
					<a className="nav-item nav-link" href="#">
						<FaHeart />
					</a>
					<a className="nav-item nav-link" href="#">
						<FaShoppingBag />
					</a>
				</div>
			</div>

			<style jsx>
				{`
					nav {
						text-transform: uppercase;
						position: relative;
					}
					.navbar-nav {
						margin-top: 40px;
					}
					.nav-item {
						font-size: 1.4rem;
						font-weight: 600;
						color: #e42313 !important;
						margin: 0 20px;
					}
				`}
			</style>
		</nav>
	);
}
