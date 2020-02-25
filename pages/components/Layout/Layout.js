import Head from 'next/head';
import Header from '../Header/Header';

const Layout = ({ children, title }) => {
	return (
		<div className="container-fluid root">
			<Head>
				<title>{title}</title>
			</Head>

			<Header />

			<main>{children}</main>

			<style global jsx>{`
				body {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
						"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}

				.root {
					margin: 0;
					padding: 0;
				}
			`}</style>
		</div>
	);
};

export default Layout;
