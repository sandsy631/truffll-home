import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Index = () => (
	<div className="container-fluid p-0">
		<Navbar />
		<header className="d-flex align-items-center justify-content-center">
			<div className="position-absolute header-text">
				<h1>Shop your favourite beauty products at home</h1>
				<Button variant="primary">Learn More</Button>
			</div>
			<img className="img-fluid banner" src="/imgs/Cover.png" alt="Cover" />
		</header>
		<section className="container">
			<h1>
				A Whole New Way<br /> To Shop Beauty
			</h1>

			<span className="d-none d-md-block">
				<div className="row">
					<div className="col-12 col-md-3">
						<div className="card">
							<h3>1</h3>
							<p>Just answer our form on what products should we bring to your house</p>
						</div>

						<div className="card">
							<h3>3</h3>
							<p>
								Our beauty crew will come over with a whole bunch of beauty products which you can try
								IRL.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="character-img">
							<img className="img-fluid w-100" src="/imgs/home-1.png" alt="" />
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="card">
							<h3>2</h3>
							<p>Select a time, date and we will follow to fix an appointment</p>
						</div>
						<div className="card">
							<h3>4</h3>
							<p>
								Select the products you like and make cash / cashless payment. You are ready for your
								takeoff!
							</p>
						</div>
					</div>
				</div>
			</span>

			<span className="d-block d-md-none">
				<div className="row">
					<div className="col-4">
						<div className="text-center">
							<h3>1</h3>
							<p>Just answer our form on what products should we bring to your house</p>
						</div>
						<div className="text-center">
							<h3>2</h3>
							<p>Select a time, date and we will follow to fix an appointment</p>
						</div>
						<div className="text-center">
							<h3>3</h3>
							<p>
								Our beauty crew will come over with a whole bunch of beauty products which you can try
								IRL.
							</p>
						</div>
						<div className="text-center">
							<h3>4</h3>
							<p>
								Select the products you like and make cash / cashless payment. You are ready for your
								takeoff!
							</p>
						</div>
					</div>

					<div className="col-7 p-0 no-gutters">
						<img
							style={{ width: '20rem', height: 900, objectFit: 'cover' }}
							src="/imgs/home-1.png"
							alt=""
						/>
					</div>
				</div>
			</span>
			<div className="row position-relative">
				<div className="col-12 col-md-5 d-flex flex-column justify-content-center ">
					<h3 className="text-uppercase">Why Call The Beauty Crew Home</h3>
					<ul style={{ paddingLeft: 20 }}>
						<li>See makeup & skincare products IRL before buying</li>
						<li>Find the exact shades you love</li>
						<li>No more used products</li>
						<li>Save yourself the hassle of dealing with returns</li>
					</ul>
					<div className="text-left mr-auto">
						<Button>Book Now</Button>
					</div>
				</div>
				<div className="col-12 col-md-7">
					<img src="/imgs/home-2.png" className="img-fluid" alt="" />
				</div>
			</div>

			<div className="row position-relative">
				<div className="col-12 col-md-7">
					<img src="/imgs/home-3.png" className="img-fluid" alt="" />
				</div>
				<div className="col-12 col-md-5 d-flex flex-column justify-content-center ">
					<p>
						Our beauty crew is like in store assistant who can answer all your questions aot how to use a
						product, help you find the right product based on your influences looks
					</p>
					<div className="text-left mr-auto">
						<Button>Book Now</Button>
					</div>
				</div>
			</div>
		</section>

		<section className="mt-0 brands-section">
			<h1 className="mx-auto">
				Choose from<br /> Popular Brands
			</h1>

			<div className="row">
				<div className="col-12 col-md-7">
					<img src="/imgs/home-4.png" className="img-fluid w-100" alt="" />
				</div>
				<div className="col-12 col-md-3 text" style={{ marginTop: 120 }}>
					<h4>Go ahead book a visit with Truffll beauty crew today</h4>
					<div className="text-left mx-auto button-container">
						<Button>Book Your Visit Now</Button>
					</div>
				</div>
			</div>
		</section>
		<style jsx>
			{`
				p {
					font-size: 1.2rem;
				}
				.banner {
					margin-top: 20px;
				}
				.header-text {
					text-align: center;
					width: 50%;
					color: white;
					text-transform: uppercase;
				}
				.header-text h1 {
					font-size: 54px;
					margin-bottom: 20px;
				}
				section {
					position: relative;
					margin-top: 100px;
				}
				section > h1 {
					font-weight: 700;
					font-size: 60px;
					text-align: center;
					color: #e42313;
					text-transform: uppercase;
				}
				.character-img {
					display: flex;
					justify-content: center;
					height: 650px;
					width: 100%;
				}
				.card {
					margin-top: 100px;
					border: 0;
					text-align: center;
					width: 240px;
				}

				@media (max-width: 560px) {
					.banner {
						height: 500px;
						object-fit: cover;
					}

					h1 {
						font-size: 2rem !important;
					}
					.brands-section {
						margin-top: 50px !important;
						padding: 0px;
						margin: 0px;
					}
					.brands-section .row {
						text-align: center;
					}
					.brands-section .text {
						margin-top: 0px !important;
					}
					.brands-section .text .button-container {
						text-align: center !important;
						margin-bottom: 50px;
					}
				}
			`}
		</style>
	</div>
);

export default Index;
