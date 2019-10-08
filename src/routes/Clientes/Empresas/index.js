import { h, Component } from 'preact';
import { Row, Form, Col } from 'react-bootstrap';
import { Panel, FormField } from '../../../components/widgets';

export default class EmpresasList extends Component {

	render() {
		return (
			<Panel title="Empresas" variant="default">
				<Form>
					<Row>
						<Col md={2}>
							<FormField type="text" label="CPF" />
						</Col>
						<Col md={10}>
							<FormField type="text" label="Nome" />
						</Col>
					</Row>
				</Form>
			</Panel>
		);
	}
}