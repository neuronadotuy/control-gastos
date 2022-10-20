/** @format */

import { useState, useEffect } from 'react';

const ControlPresupuesto = ({ gastos, presupuesto }) => {
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);

	useEffect(() => {
		// evaluamos cada gasto y los vamos sumando para mostrar el monto gastado.
		// gastos.reduce toma un "total", que comienza en 0 y le va sumando los gastos.
		const totalGastado = gastos.reduce((total, gasto) => {
			return total + gasto.cantidad;
		}, 0);
		// al presupuesto le quitamos el totalGastado para conocer el restante disponible.
		const totalDisponible = presupuesto - totalGastado;
		// guardamos ambos valores en los states correspondientes.
		setGastado(totalGastado);
		setDisponible(totalDisponible);
	}, [gastos]);

	const fromatCantidad = (cantidad) => {
		return cantidad.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	};
	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<p>Grafica</p>
			</div>
			<div className='contenido-presupuesto'>
				<p>
					<span>Presupuesto:</span> {fromatCantidad(presupuesto)}
				</p>
				<p>
					<span>Disponible:</span> {fromatCantidad(disponible)}
				</p>
				<p>
					<span>Gastado:</span> {fromatCantidad(gastado)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
