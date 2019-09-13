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
						<MenuItem title="Teste2" icon="fa fa-coffee fa-fw" href="home"/>
						<MenuItem title="Teste" icon="fa fa-user fa-fw">
							<MenuItem title="Level 2" />
							<MenuItem title="Level 2" />
							<MenuItem title="Level 2">
								<MenuItem title="level 3" />
							</MenuItem>
						</MenuItem>
					</Menu>
				</section>
			</aside>
		);
	}
}