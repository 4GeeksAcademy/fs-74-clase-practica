import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

export default function Login() {
	const navigate = useNavigate();

	const [nombre, setNombre] = useState("");

	function registrarUsuario() {
		// Registrario el usuario
		fetch(`https://playground.4geeks.com/todo/users/${nombre}`, {
			method: "POST",
		});

		// TODO OK
		navigate(`${nombre}/todo`);
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div className="input-group mb-3 w-25 mx-auto">
				<span className="input-group-text" id="basic-addon1">Username</span>
				<input type="text" className="form-control" placeholder="Cacahuete" aria-label="Username" aria-describedby="basic-addon1" onChange={(evento) => setNombre(evento.target.value)} />
				<button type="button" className="btn btn-primary" onClick={() => registrarUsuario()}>Primary</button>
			</div>
		</div>
	)
}

