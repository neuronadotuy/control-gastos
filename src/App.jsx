/** @format */

import { useEffect, useState } from 'react';
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
	const [gastoEditar, setGastoEditar] = useState({});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			handleNuevoGasto();
		}
	}, [gastoEditar]);

	const handleNuevoGasto = () => {
		setModal(true);
		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
	};

	const guardarGasto = (gasto) => {
		console.log('here');
		if (gasto.id) {
			// si ya trae un ID
			const gastosActualizados = gastos.map((gastoState) => {
				return gastoState.id === gasto.id ? gasto : gastoState
			})
			setGastos(gastosActualizados)
		} else {
			// nuevo gasto
			gasto.id = generarId();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
		}

		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};

	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				gastos={gastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValid={isValid}
				setIsValid={setIsValid}
			/>
			{isValid && (
				<>
					<main>
						<ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} />
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
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
