import React, { useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";


import "../../styles/home.css";

export const Todo = () => {
	const { username } = useParams();

	const [tareas, setTareas] = useState([]);

	const [nombreTarea, setnombreTarea] = useState([]);

	function refrescarTareas() {
		fetch(`https://playground.4geeks.com/todo/users/${username}`)
			.then(response => response.json())
			.then(json => setTareas(json.todos));
	}

	function crearTrear() {
		fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"label": nombreTarea,
				"is_done": false,
			})
		});

		refrescarTareas();
	}

	function borrarTarea(id) {
		fetch(`https://playground.4geeks.com/todo/todos/${id}`, { method: "DELETE" })
	}


	useEffect(() => {
		refrescarTareas();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Lista de tareas de {username}</h1>

			<div className="input-group mb-3 w-25 mx-auto">
				<span className="input-group-text" id="basic-addon1">Tarea</span>
				<input type="text" className="form-control" placeholder="Nombre de la tarea" aria-label="Username" aria-describedby="basic-addon1" onChange={(evento) => setnombreTarea(evento.target.value)} />
				<button type="button" className="btn btn-primary" onClick={() => crearTrear()}>Primary</button>
			</div>

			<ul>
				{tareas?.map((tarea) => (
					<li key={tarea.id} onClick={() => { borrarTarea(tarea.id); refrescarTareas() }}>{JSON.stringify(tarea)}</li>
				))}
			</ul>

			<Link to="/">
				<span className="navbar-brand mb-0 h1">Cambiar de usuario</span>
			</Link>
		</div>
	)
};
