import React from "react";
import { Link } from 'react-router-dom'
import Imagem1 from "../imagem/arvore.svg"
import Imagem2 from "../imagem/bola.svg"
import Imagem3 from "../imagem/borboleta.svg"
import Imagem4 from "../imagem/casa.svg"
import Imagem5 from "../imagem/pato.svg"
import Imagem6 from "../imagem/família.svg"
import Imagem7 from "../imagem/passaro.svg"
import Imagem8 from "../imagem/televisão.svg"
import Imagem9 from "../imagem/medico.svg"
import Imagem10 from "../imagem/illustracao.svg"
import Imagem11 from "../imagem/assistente2.svg"


export default function Home() {
	return (
		<div>
			<main className="container mt-5">
				<section className="row principal">
					<div className="col-12 col-md-6 text-center">
						<h1 className="display-4">Alfabetiza</h1>
						<h1 className="display-5">Plantando sementes</h1>
						<p className="lead">
							Alfabetiza, plataforma de aprendizado <br />
							Para todos que precisem compreender o sentido das palavras. <br />
							Jogos com sementes sílabicas.
						</p>
						<div className="d-grid d-md-block">
							<Link type="button" className="btn btn-outline-warning mx-2" to="/Jogo"> Inicie Já</Link>
						</div>
					</div>
					<div className="col-md-6 mt-1 d-none d-md-block">
						<img className="img-fluid" src={Imagem10} alt="figura-avatar" />
					</div>
				</section>
				<section className="carrossel mt-5 row">
					<div className="btn-group col-12" role="group" aria-label="Basic radio toggle button group">
						<input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
						<label className="btn btn-outline-warning" for="btnradio1">Nivel 1</label>

						<input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
						<label className="btn btn-outline-warning" for="btnradio2">Nivel 2</label>

						<input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
						<label className="btn btn-outline-warning" for="btnradio3">Nivel 3</label>
					</div>
					<div id="carouselExampleIndicators" className="carousel slide carousel-dark my-3" data-bs-ride="true">
						<div className="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
								className="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
								aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
								aria-label="Slide 3"></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="row row-cols-1 row-cols-md-3 g-4">
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Casa</div>
											<img src={Imagem4} className="card-img-top" alt="casa" />
											<div className="card-body">
												<h5 className="card-title">Nível 1</h5>
												<p className="card-text">Uma palavra semente, crie 3 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning mx-2" to="/Jogo"> Vamos
													lá</Link>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Bola</div>
											<img src={Imagem2} className="card-img-top" alt="bola" />
											<div className="card-body">
												<h5 className="card-title">Nível 1</h5>
												<p className="card-text">Uma palavra semente, crie 4 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning mx-2" to="/Jogo" role="button">Vamos
													lá</Link>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Pato</div>
											<img src={Imagem5} className="card-img-top" alt="pato" />
											<div className="card-body">
												<h5 className="card-title">Nível 1</h5>
												<p className="card-text">Uma palavra semente, crie 5 novas palavras</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo" role="button">
													Vamos  lá</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="row row-cols-1 row-cols-md-3 g-4">
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Família</div>
											<img src={Imagem6} className="card-img-top" alt="familia" />
											<div className="card-body">
												<h5 className="card-title">Nível 2</h5>
												<p className="card-text">Uma palavra semente, crie 6 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo" role="button">Vamos
													lá</Link>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Pássaro</div>
											<img src={Imagem7} className="card-img-top" alt="passaro" />
											<div className="card-body">
												<h5 className="card-title">Nível 2</h5>
												<p className="card-text">Uma palavra semente, crie 7 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo" role="button">Vamos
													lá</Link>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Árvore</div>
											<img src={Imagem1} className="card-img-top" alt="arvore" />
											<div className="card-body">
												<h5 className="card-title">Nível 2</h5>
												<p className="card-text">Uma palavra semente, crie 8 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo">Vamos
													lá</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="row row-cols-1 row-cols-md-3 g-4">
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Médico</div>
											<img src={Imagem9} className="card-img-top" alt="medico" />
											<div className="card-body">
												<h5 className="card-title">Nível 3</h5>
												<p className="card-text">Uma palavra semente, crie 9 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo" role="button">Vamos
													lá</Link>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Borboleta</div>
											<img src={Imagem3} className="card-img-top" alt="borboleta" />
											<div className="card-body">
												<h5 className="card-title">Nível 3</h5>
												<p className="card-text">Uma palavra semente, crie 10 novas palavras.</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo" role="button">Vamos
													lá</Link>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card h-100">
											<div className="card-body text-center fw-bold">Televisão</div>
											<img src={Imagem8} className="card-img-top" alt="televisão" />
											<div className="card-body">
												<h5 className="card-title">Nível 3</h5>
												<p className="card-text">
													Uma palavra semente, crie 11 novas palavras .
												</p>
											</div>
											<div className="card-body">
												<Link className="btn btn-warning" to="/Jogo" role="button">Vamos
													lá</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button className="carousel-control-prev justify-content-start d-none d-lg-flex" type="button"
							data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next justify-content-end d-none d-lg-flex" type="button"
							data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>

				</section>

			</main>

			<div className="assistente container-fluid fixed-bottom mb-8">
				<img src={Imagem11} className="d-none d-md-block float-end img-fluid" width="88" height="88"
					alt="Assistente-Virtual" />
				<img src={Imagem11} className="d-block d-md-none float-end img-fluid" width="64" height="64"
					alt="Assistente-Virtual" />
			</div>
			<p></p>
		</div>
	)
};