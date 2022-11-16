import React from 'react'
import Imagem1 from "../imagem/Theones.svg"
import Imagem2 from "../imagem/Elcio.svg"
import Imagem3 from "../imagem/Débora.svg"

export default function Squad() {
	return (

		<main>
			<p className="display-6 text-center"> Educar é impregnar de sentido o que fazemos a cada instante. "Paulo
				Freire".</p>

			<div className="row row-cols-1 row-cols-md-3 g-3">
				<div className="col">
					<div className="card ">
						<img src={Imagem1} className="card-img-top" style={{width: "250px"}}alt="Theones"></img>
							<div className="card-body">
								<h5 className="card-title">Theones</h5>
								<p className="card-text">Especialista em Front/Back End.</p>
							</div>
					</div>
				</div>
				<div className="col">
					<div className="card ">
						<img src={Imagem2} className="card-img-top" style={{width: "250px"}} alt="Elcio"></img>
							<div className="card-body">
								<h5 className="card-title">Elcio</h5>
								<p className="card-text">Especialista em Front/Back End</p>
							</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img src={Imagem3} className="card-img-top" style={{width: "250px"}} alt="Debora"></img>
							<div className="card-body">
								<h5 className="card-title">Débora</h5>
								<p className="card-text">Especialista em Front/Back End.</p>
							</div>
					</div>
				</div>
			</div>

			<div className="container">
				<p className="row display-6 text-start"> Mande sua mensagem </p>
				<div className="container mt-3">
					<div className="mb-3">
						<label for="exampleFormControlInput1" className="form-label">Nome completo</label>
						<input type="text" className="form-control" id="exampleFormControlInput1"
							placeholder="Digite aqui seu nome" />
					</div>
					<div className="mb-3">
						<label for="exampleFormControlInput2" className="form-label">E-mail</label>
						<input type="email" className="form-control" id="exampleFormControlInput2"
							placeholder="Digite aqui seu e-mail" />
					</div>
					<div className="mb-3">
						<label for="exampleFormControlTextarea1" className="form-label">Sugestões</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						<input className="btn btn-primary mt-3" type="submit" value="Enviar" />
					</div>
				</div>
			</div>
		</main>

	)
};