/** @format */

const ControlPresupuesto = ({ presupuesto }) => {
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
					<span>Disponible:</span> {fromatCantidad(presupuesto)}
				</p>
				<p>
					<span>Gastado:</span> {fromatCantidad(presupuesto)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
