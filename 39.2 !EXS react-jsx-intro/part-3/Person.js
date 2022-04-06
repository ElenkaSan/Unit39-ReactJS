const Person = (props) => {
    let reply;
    if (props.age < 18) {
      reply = <h3>Sorry kid, you must be 18yo</h3>
    } else {
      reply = <h3>Please go vote!</h3>
    }
    return (
      <div  class="alert alert-success" role="alert">
          <p class="alert-heading">Learn some information about this person</p>
        	<h2>
				{props.name.length > 8 ? props.name.substring(0, 6) : props.name}
 			</h2>
        <p>
          <b> Full name is {props.name}:</b> I am  {props.age} years old
        </p>
        {reply}
        <p  class="mb-0"> My hobbies: 
        <ul>{props.hobbies.map((hobby) => <li>{hobby}</li>)}</ul> 
        </p>
      </div>
    );
  };

// const Person = (props) => {
// 	return (
// 		<div>
// 			<p>Learn some information about this person</p>
// 			<h2>
// 				{props.name.length > 8 ? props.name.substring(0, 6) : props.name} ({props.age})
// 			</h2>
// 			<h3>{props.age > 18 ? 'Please go vote!' : 'You must be 18'}</h3>
// 			<ul>{props.hobbies.map((hobby) => <li>{hobby}</li>)}</ul>
// 		</div>
// 	);
// };