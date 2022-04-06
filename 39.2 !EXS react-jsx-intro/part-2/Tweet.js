const Tweet = (props) => {
	return (
		<div class="alert alert-warning alert-dismissible fade show" role="alert">
			<p>
			{props.name} <strong>({props.username}): </strong>
			{props.message} </p>
			<small> Date {props.date}</small>
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
		</div>
	);
};