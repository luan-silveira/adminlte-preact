import { h } from 'preact';
import { Form } from 'react-bootstrap';

const FormField = ({ type, label, ...props }) => (
	<Form.Group>
		<Form.Label>{label}</Form.Label>
		<Form.Control type={type} {...props} />
	</Form.Group>
);

const Panel = ({ variant, title, ...rest }) => (
	<div class={`panel panel-${variant}`} >
		{!title ? null : (
			<div class="panel-heading">
				<div class="panel-title">{title}</div>
			</div>
		)}
		<div class="panel-body">
			{rest.children}
		</div>
	</div>
);

export { Panel, FormField };