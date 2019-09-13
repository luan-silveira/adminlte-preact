import { h, } from 'preact';
import { Link } from 'react-router-dom';

const UserMenu = () => (
	<li class="dropdown user user-menu" id="USERACCOUNT">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
			<i class="fa fa-user" />
			<span class="hidden-xs">Administrator</span>
		</a>
		<ul class="dropdown-menu">
			<li class="user-header" style={{ height: 'initial' }}>
				<i class="fa fa-user fa-3x" style={{ color: 'white' }} />
				<p>Administrator</p>
			</li>

			<li class="user-footer">
				<div class="pull-left">
					<a generator="adianti" href="index.php?class=SystemProfileForm&amp;method=onEdit" class="btn btn-default btn-flat">Perfil</a>
				</div>
				
				<div class="pull-right">
					<Link to="/logout" class="btn btn-default btn-flat">Sair</Link>
				</div>
			</li>
		</ul>
	</li>

);

export default UserMenu;