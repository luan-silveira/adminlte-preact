import { h, Component } from "preact";
import Header from "./Header";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import { PrivateRoute } from "./PrivateRoute";

const App = (props) => (
	<div class="wrapper">
		<Header />
		<Sidebar />
		<div class="content-wrapper">
			<section class="content">
				{props.children}
			</section>
		</div>
		<Footer />
	</div>
);

export default App;