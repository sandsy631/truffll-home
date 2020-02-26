import Navbar from '../components/Navbar';
import Button from '../components/Button';

import { setTranslations, setDefaultLanguage, setLanguage, translate } from 'react-switch-lang';

import en from '../en.json';
import th from '../th.json';

setTranslations({ en, th });
setDefaultLanguage('en');

class Index extends React.Component {
	handleSetLanguage = (key) => () => {
		setLanguage(key);
	};

	render() {
		const { t } = this.props;
		return (
			<div className="container-fluid p-0" style={{ overflowX: 'hidden' }}>
				<div className="ml-auto text-right mr-5 mt-2" style={{ width: 120 }}>
					<select
						className="form-control"
						onChange={(e) => {
							setLanguage(e.target.value);
						}}
					>
						<option value="en">English</option>
						<option value="th">Spanish</option>
					</select>
				</div>

				<Navbar />
				<header className="d-flex align-items-center justify-content-center">
					<div className="position-absolute header-text">
						<h1>{t('headerText')}</h1>
						<Button variant="primary">
							<a href="#learnMore" className="text-white">
								Learn More
							</a>
						</Button>
					</div>
					<img className="img-fluid banner" src="/imgs/Cover.png" alt="Cover" />
				</header>
				<section className="container">
					<h1>{en.sectionText}</h1>

					<span className="d-none d-md-block" id="learnMore">
						<div className="row">
							<div className="col-12 col-md-3">
								<div className="card">
									<h3>1</h3>
									<p>{en.services[0]}</p>
								</div>

								<div className="card">
									<h3>3</h3>
									<p>{en.services[2]}</p>
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
									<p>{en.services[1]}</p>
								</div>
								<div className="card">
									<h3>4</h3>
									<p>{en.services[3]}</p>
								</div>
							</div>
						</div>
					</span>

					<span className="d-block d-md-none">
						<div className="row">
							<div className="col-6">
								{en.services.map((s, index) => (
									<div className="d-flex" key={index}>
										<h3 style={{ fontSize: 18 }}>{index + 1}</h3>
										<p className="ml-3" style={{ fontSize: 12 }}>
											{s}
										</p>
									</div>
								))}
							</div>

							<div className="col-6 p-0 no-gutters">
								<img
									className="img-fluid"
									style={{ height: 300, objectFit: 'cover' }}
									src="/imgs/home-1.png"
									alt=""
								/>
							</div>
						</div>
					</span>
					<div className="row position-relative">
						<div className="col-12 col-md-7">
							<img src="/imgs/home-2.png" className="img-fluid" alt="" />
						</div>

						<div className="col-12 col-md-5 d-flex flex-column justify-content-center ">
							<h3 className="text-uppercase">{en.servicesText}</h3>
							<ul style={{ paddingLeft: 20 }}>{en.servicesPoints.map((p) => <li key={p}>{p}</li>)}</ul>
							<div className="text-left mr-auto">
								<Button>
									<a className="text-white" href="https://charu470199.typeform.com/to/YD8ZMm">
										Book Now
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="row position-relative">
						<div className="col-12 col-md-7">
							<img src="/imgs/home-3.png" className="img-fluid" alt="" />
						</div>
						<div className="col-12 col-md-5 d-flex flex-column justify-content-center ">
							<p>{en.crewText}</p>
							<div className="text-left mr-auto">
								<Button>
									<a className="text-white" href="https://charu470199.typeform.com/to/YD8ZMm">
										Book Now
									</a>
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="mt-0 brands-section">
					<h1 className="mx-auto">{en.brandsText}</h1>

					<div className="row">
						<div className="col-12 col-md-7">
							<img src="/imgs/home-4.png" className="img-fluid w-100" alt="" />
						</div>
						<div className="col-12 col-md-3 text" style={{ marginTop: 100 }}>
							<h4>{en.brandsDescription}</h4>
							<div className="text-left mx-auto button-container">
								<a href="https://charu470199.typeform.com/to/YD8ZMm" target="_blank">
									<Button>
										<a className="text-white" href="https://charu470199.typeform.com/to/YD8ZMm">
											Book Your Visit Now
										</a>
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>

				<style jsx>
					{`
						p {
							font-size: 1.2rem;
							font-weight: 400;
						}
						.banner {
							margin-top: 20px;
						}
						.header-text {
							font-family: myriad-pro, sans-serif !important;
							font-style: normal;
							text-align: center;
							width: 60%;
							color: white;
							text-transform: uppercase;
						}
						.header-text h1 {
							font-weight: 700;
							font-size: 54px;
							margin-bottom: 20px;
						}
						section {
							position: relative;
							margin-top: 100px;
						}
						section > h1 {
							margin: 0 auto;
							width: 600px;
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
							section > h1 {
								width: 100%;
								margin-bottom: 30px;
							}
							.banner {
								height: 500px;
								object-fit: cover;
							}
							.header-text {
								width: 75%;
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
	}
}
export default translate(Index);
