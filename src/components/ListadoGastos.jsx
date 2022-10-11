/** @format */

import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => {
	return (
		<div className='listado-gastos contenedor'>
			<h2>{gastos.length ? 'Gastos' : 'No tienes gastos aun'}</h2>
			{gastos.map((gasto) => {
				return <Gasto gasto={gasto} key={gasto.id} />;
			})}
		</div>
	);
};

export default ListadoGastos;
