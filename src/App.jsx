/** @format */

import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import IconNuevoGasto from './img/nuevo-gasto.svg';
import { generarId } from './helpers';
import ListadoGastos from './components/ListadoGastos';

function App() {
	const [presupuesto, setPresupuesto] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastos, setGastos] = useState([]);

	const handleNuevoGasto = () => {
		setModal(true);
		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
	};

	const guardarGasto = (gasto) => {
		gasto.id = generarId();
		gasto.fecha = Date.now();
		setGastos([...gastos, gasto]);

		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};

	return (
		<div className='App'>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValid={isValid}
				setIsValid={setIsValid}
			/>
			{isValid && (
				<>
					<main>
						<ListadoGastos gastos={gastos} />
					</main>
					<div className='nuevo-gasto'>
						<img
							src={IconNuevoGasto}
							alt='Icono Nuevo Gasto'
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarGasto={guardarGasto}
				/>
			)}
		</div>
	);
}

export default App;
