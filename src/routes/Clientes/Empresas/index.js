import { h } from 'preact';
import { PrivateRoute } from '../../../components/PrivateRoute';
import EmpresasList from './EmpresasList';

const Empresas = () => (
	<PrivateRoute path="/" component={EmpresasList} />
);

export default Empresas;