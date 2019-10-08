import { h, Component, Fragment } from 'preact';
import { Row, Form, Col } from 'react-bootstrap';
import { Panel, FormField } from '../../../components/widgets';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

export default class EmpresasList extends Component {
	rows = [];

	componentDidMount() {
		fetch('http://localhost/WSPlataformaESC/rest.php?class=GnrEmpService&method=handle')
			.then(res => res.json())
			.then(json => {
				this.rows = json;
			})
	}

	render() {

		const datagridColumns = [
			{ dataField: '', text: '', formatter: (_, row, i) => 
				<Fragment>
					<Link to={"/empresas/" + row.id}>
						<i class='fa fa-eye fa-lg'></i>
					</Link>
				</Fragment>
			},
			{ dataField: 'empid', text: 'ID' },
			{ dataField: 'empcnpj', text: 'CNPJ' },
			{ dataField: 'emprazsoc', text: 'Razão Social' },
			{ dataField: 'emptel', text: 'Telefone' },
			{ dataField: 'empcel', text: 'Celular' },
			{ dataField: 'empemail', text: 'E-mail' },
		];

		return (
			// Painel de pesquisa
			<Fragment>
				<Panel title="Empresas" variant="default">
					<Form>
						<Row>
							<Col md={2}>
								<FormField type="text" label="CNPJ" id="empcnpj" name="empcnpj" />
							</Col>
							<Col md={10}>
								<FormField type="text" label="Razão Social" id="emprazsoc" name="emprazsoc" />
							</Col>
						</Row>
						<Row>
							<Col md={2}>
								<FormField type="text" label="Telefone" id="emptel" name="emptel" />
							</Col>
							<Col md={4}>
								<FormField type="text" label="E-mail" id="empemail" name="empemail" />
							</Col>
							<Col md={2}>
								<FormField type="text" label="Celular" id="emptel" name="emptel" />
							</Col>
						</Row>
					</Form>
				</Panel>

				<Panel variant="default">
					<BootstrapTable id="table" keyField="empid" columns={datagridColumns} data={this.rows} pagination={ paginationFactory() } />
				</Panel>

			</Fragment>

		);
	}
}