import { h, Component } from "preact";
import {Link} from 'react-router-dom';
import Navbar from "./navbar";

const Logo = () => (
	<Link to="/" class="logo">
		<span class="logo-mini"><b>A</b>LT</span>
		<span class="logo-lg"><b>Admin</b>LTE</span>
	</Link>
);


export default class Header extends Component {
	render() {
		return (
			<header class="main-header">
				{/* Logo */}
				<Logo />
				<Navbar />

			</header>
		);
	}
}