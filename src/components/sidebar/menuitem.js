import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

export default class MenuItem extends Component {

	render(props) {

		let hasChildren = !!props.children && props.children.length > 0;

		return (
			<li class={hasChildren ? "treeview" : ""}>
				<Link to={!props.href ? "#" : props.href}>
					<i class={props.icon} style={{ paddingRight: 4 }} />
					<span>{props.title}</span>
					{ hasChildren ? (
						<span class="pull-right-container">
                  	<i class="fa fa-angle-left pull-right"></i>
					 	</span>
					 ) : null }
				</Link>
				{ hasChildren ? (
					<ul className="treeview-menu" style={{ display: 'none' }}>
						{ props.children }
					</ul>
				) : null }
			</li>
		);
	}
}