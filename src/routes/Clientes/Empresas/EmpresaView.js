import { h } from 'preact';
import { Panel } from '../../../components/widgets';
import { Tabs, Tab } from 'react-bootstrap';

const EmpresaView = (props, state) => {
	console.log({props, state});
	return (
		<Panel variant="default" title="Empresas">
			<Tabs defaultActiveKey="dados_pessoais">
				<Tab eventKey="dados_pessoais" title="Dados Pessoais">
					<p>Teste</p>
				</Tab>
				<Tab eventKey="outros" title="Outros dados" />
			</Tabs>
		</Panel>
	);
};

export default EmpresaView;