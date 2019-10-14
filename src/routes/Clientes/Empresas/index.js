import { h , Fragment} from 'preact';
import { PrivateRoute } from '../../../components/PrivateRoute';
import EmpresasList from './EmpresasList';
import EmpresaView from './EmpresaView';
import { Switch } from 'react-router-dom';

const Empresas = () => (
	<Switch>
		<PrivateRoute path="/" component={EmpresasList} />
		<PrivateRoute path="/teste" component={EmpresaView} />
	</Switch>
);

export default Empresas;