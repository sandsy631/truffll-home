import React from 'react';
import Link from 'next/link';
import { FaShoppingBag, FaRegHeart } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
export default function Header() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg py-4 navbar-light bg-white">
				<a className="navbar-brand" href="#" />
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
					<ul className="navbar-nav mr-2">
						<li className="nav-item ">
							<Link href="/login">
								<a className="nav-link font-weight-bold">LOGIN</a>
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#">
								<GoSearch />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<FaRegHeart />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<FaShoppingBag />
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<style jsx>
				{`
					.nav-link {
						color: #e42213 !important;
						font-size: 18px;
					}
				`}
			</style>
		</div>
	);
}
