/** @format */

import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setGastoEditar }) => {
	return (
		<div className='listado-gastos contenedor'>
			<h2>{gastos.length ? 'Gastos' : 'No tienes gastos aun'}</h2>
			{gastos.map((gasto) => {
				return (
					<Gasto
						gasto={gasto}
						key={gasto.id}
						setGastoEditar={setGastoEditar}
					/>
				);
			})}
		</div>
	);
};

export default ListadoGastos;
