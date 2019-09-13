import { h } from 'preact';
import UserMenu from './usermenu';

const Navbar = props => (
	<nav className="navbar navbar-static-top" role="navigation">
		{/* Sidebar toggle button*/}
		<a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
			<span className="sr-only">Toggle navigation</span>
		</a>
		<NavbarMenu />
	</nav>
);

const NavbarMenu = () => (
	<div class="navbar-custom-menu">
		<ul className="nav navbar-nav">
			<li className="dropdown notifications-menu" id="support">
				<a title generator="adianti" href="index.php?class=SystemSupportForm" data-original-title="Abrir Ticket">
					<i className="fa fa-life-ring fa-fw" />
				</a>
			</li>
			<li className="dropdown notifications-menu" id="envelope_notifications" />
			<UserMenu />
		</ul>
	</div>
);

export default Navbar;