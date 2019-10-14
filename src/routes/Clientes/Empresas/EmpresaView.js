import { h } from 'preact';
import { Panel } from '../../../components/widgets';
import { Tabs, Tab } from 'react-bootstrap';
import { Component } from 'react';

export default class EmpresaView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			empid: props.match.params.empid
		}
	}

	render() {
		
		return (
			<Panel variant="default" title="Empresas">
				<Tabs defaultActiveKey="dados_pessoais">
					<Tab eventKey="dados_pessoais" title="Dados Pessoais">
						<Panel variant="primary">
							<p>asdasdasd</p>
						</Panel>
					</Tab>
					<Tab eventKey="outros" title="Outros dados">
						<p>asdasd</p>
					</Tab>
				</Tabs>
			</Panel>
		);
	};
}