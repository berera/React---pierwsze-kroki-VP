import React from "react";
import "./EditEvent.css";

const EditEvent = (props) => {
	return (
		<div className="edit-event">
			<div className="edit-event__input-group">
				<label htmlFor="name">name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={props.name}
					onChange={(e) =>
						props.onInputChange({ [e.target.name]: e.target.value })
					}
				/>
			</div>
			<div className="edit-event__input-group">
				<label htmlFor="hour">hour</label>
				<input
					type="tel"
					id="hour"
					name="hour"
					value={props.hour}
					onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}
				/>
			</div>
			<div className="edit-event__input-group">
				<label htmlFor="minut">minut</label>
				<input
					type="tel"
					id="minute"
					name="minute"
					value={props.minute}
					onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}
				/>
			</div>
			<button onClick={() => props.onSave()}>OK</button>
			<button>Cancel</button>
		</div>
	);
};

export default EditEvent;
