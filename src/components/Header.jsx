/** @format */

import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({
	gastos,
	presupuesto,
	setPresupuesto,
	isValid,
	setIsValid,
}) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValid ? (
				<ControlPresupuesto gastos={gastos} presupuesto={presupuesto} />
			) : (
				<NuevoPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValid={setIsValid}
				/>
			)}
		</header>
	);
};

export default Header;
