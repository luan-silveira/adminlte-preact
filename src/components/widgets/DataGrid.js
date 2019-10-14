import { h, Component } from 'preact';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';

export default class DataGrid extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			url: props.url,
			loading: false
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		fetch(this.state.url)
			.then(res => res.json())
			.then(json => {
				this.setState({ data: json, loading: false });
			})
	}

	render = (props, { data, loading }) => {
		return (
			<BootstrapTable remote={{
				filter: true,
				pagination: false,
				sort: false,
				cellEdit: false
			}
			} data={data} striped noDataIndication={() => (<p style="text-align: center, padding: 10px">Não há dados</p>)} loading={loading} pagination={paginationFactory()} {...props} />
		);
	}

}