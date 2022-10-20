/** @format */
import { useEffect, useState } from 'react';
import CerrarModal from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({
	setModal,
	setAnimarModal,
	animarModal,
	guardarGasto,
	gastoEditar,
	setGastoEditar,
}) => {
	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState('');
	const [categoria, setCategoria] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [id, setId] = useState('');
	const [fecha, setFecha] = useState('')

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setNombre(gastoEditar.nombre);
			setCantidad(gastoEditar.cantidad);
			setCategoria(gastoEditar.categoria);
			setId(gastoEditar.id);
			setFecha(gastoEditar.fecha)
		}
	}, []);

	const handleCloseModal = () => {
		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
			setNombre('');
			setCantidad('');
			setCategoria('');
			setGastoEditar({});
		}, 200);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if ([nombre, cantidad, categoria].includes('')) {
			setMensaje('Todos los campos son obligatorios');
			setTimeout(() => {
				setMensaje('');
			}, 3000);
			return;
		}

		setTimeout(() => {
			setNombre('');
			setCantidad('');
			setCategoria('');
			setGastoEditar({});
			setModal(false);
		}, 200);

		guardarGasto({ nombre, cantidad, categoria, id });
	};

	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img src={CerrarModal} alt='' onClick={handleCloseModal} />
			</div>
			<form
				action=''
				className={`formulario ${animarModal && 'animar'}`}
				onSubmit={handleSubmit}>
				<legend>
					{Object.keys(gastoEditar).length > 0 ? 'Editar Gasto' : 'Nuevo Gasto'}
				</legend>
				{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
				<div className='campo'>
					<label htmlFor='nombre'>Nombre Gasto</label>
					<input
						id='nombre'
						type='text'
						placeholder='Anade el nombre del gasto'
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className='campo'>
					<label htmlFor='cantidad'>Cantidad</label>
					<input
						id='cantidad'
						type='number'
						placeholder='Anade el monto'
						value={cantidad}
						onChange={(e) => setCantidad(Number(e.target.value))}
					/>
				</div>
				<div className='campo'>
					<label htmlFor='categoria'>Categoria</label>
					<select
						name='categoria'
						id='categoria'
						value={categoria}
						onChange={(e) => setCategoria(e.target.value)}>
						<option value=''>-- Seleccione</option>
						<option value='ahorro'>Ahorro</option>
						<option value='comida'>Comida</option>
						<option value='casa'>Casa</option>
						<option value='varios'>Gastos Varios</option>
						<option value='ocio'>Ocio</option>
						<option value='salud'>Salud</option>
						<option value='suscipciones'>Suscripciones</option>
					</select>
				</div>
				<input
					type='submit'
					value={
						Object.keys(gastoEditar).length > 0
							? 'Editar Gasto'
							: 'Anadir Gasto'
					}
				/>
			</form>
		</div>
	);
};

export default Modal;
