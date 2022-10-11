/** @format */

import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid }) => {
	const [mensaje, setMensaje] = useState('');
	const handlePresupuesto = (e) => {
		e.preventDefault();
		if (!presupuesto || presupuesto < 0) {
			setMensaje('Presupuesto incorrecto');
			return;
		}
		setMensaje('');
		setIsValid(true);
	};
	return (
		<div className='contenedor-presupuesto contenedor sombra'>
			<form className='formulario' onSubmit={handlePresupuesto}>
				<div className='campo'>
					<label htmlFor=''>Definir Presupuesto</label>
					<input
						type='number'
						className='nuevo-presupuesto'
						placeholder='Anade Presupuesto'
						value={presupuesto}
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>
				<input type='submit' value='Anadir' />
				{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
			</form>
		</div>
	);
};

export default NuevoPresupuesto;
