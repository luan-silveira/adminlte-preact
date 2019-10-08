import { h, Component } from "preact";
import Menu from "./menu";
import MenuItem from "./menuitem";

export default class Sidebar extends Component{

	render() {
		return (
			<aside class="main-sidebar">
				<section class="sidebar">
					{/* <div class="user-panel" style={{ width: 230, overflow: 'hidden', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: 'url("app/templates/theme3/logos/logo.jpg")', visibility: 'hidden' }}>
						<div class="pull-left image">
							<i class="fa fa-user fa-2x" style={{ color: 'white', visibility: 'hidden' }} />
						</div>
					</div> */}

					<Menu>
						<MenuItem title="Clientes" icon="fa fa-group fa-fw">
							<MenuItem title="Empresas" path="/empresas" icon="fa fa-building-o fa-fw" />
							<MenuItem title="Sócios" icon="fa fa-user fa-fw" />
						</MenuItem>
						<MenuItem title="Cadastros" icon="fa fa-file-text-o fa-fw">
							<MenuItem title="ESCs" icon="fa fa-building fa-fw" />
						</MenuItem>
					</Menu>
				</section>
			</aside>
		);
	}
}