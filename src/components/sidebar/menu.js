import { h } from 'preact';

export default function Menu(props){
	return (
		<ul class="sidebar-menu tree" data-widget="tree">
			{props.children}
		</ul>
	);
}