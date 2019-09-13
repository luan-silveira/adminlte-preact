const Panel = ({ variant, title, ...rest }) => {
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
}

export default Panel;