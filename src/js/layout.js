import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Login from "./views/login"
import { Todo } from "./views/todo"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	/**
	 * Aplicacion con la api de TODO -> https://playground.4geeks.com/todo/docs#/
	 * 
	 * 1. Pagina: Insertar Usuario (fetch POST) Si http 400 ya existe el usuario
	 * 2. Pagina: TODO (by user)
	 * 	2.1 Leer tareas (fetch GET)
	 *  2.2 Crear tareas (fetch POST)
	 *  2.3 Borrar tareas (fetch DELETE)
	 * 
	 *  2.4 Actualizar la tarea (fetch PUT)
	 */

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/:username/todo" element={<Todo />} />

						{/* <Route path="/single/:theid" element={<Single />} /> */}
						{/* <Route path="*" element={<h1>Not found!</h1>} /> */}
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
