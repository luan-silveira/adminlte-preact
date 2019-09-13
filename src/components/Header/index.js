import { h, Component } from "preact";
import Navbar from "./navbar";

const Logo = () => (
	<a href="index2.html" className="logo">
		<span className="logo-mini"><b>A</b>LT</span>
		<span className="logo-lg"><b>Admin</b>LTE</span>
	</a>
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