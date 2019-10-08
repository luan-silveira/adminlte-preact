import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

export default class MenuItem extends Component {

	render(props) {
		let children = props.children;
		let hasChildren = children && (!Array.isArray(children) || children.length > 0)

		return (
			<li class={hasChildren ? "treeview" : ""}>
				<Link to={!props.path ? "#" : props.path}>
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