import React from "react";
import PropTypes from "prop-types";
import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";
import { hourMinutToSeconds, secondsToHourMinutSecond } from "./utils";
import Overlay from "./Overlay";

const Countdown = (props) => {
	const eventInSeconds = hourMinutToSeconds(props.hour, props.minute);
	const nowInSeconds =
		hourMinutToSeconds(props.timeNow.hour, props.timeNow.minute) +
		props.timeNow.seconds;

	const diff = eventInSeconds - nowInSeconds;
	const diffText = diff > 0 ? secondsToHourMinutSecond(diff) : "tomorrow";
	return (
		<>
			<div className="countdown">
				<strong>{props.name}</strong> - {diffText}
				<div className="countdown__icons">
					<i className="icon edit" onClick={() => props.onEditInit(props.id)} />
					<i className="icon times" onClick={() => props.onRemove(props.id)} />
				</div>
				<Overlay>
					{/* <h1> */}
					<p>{props.name}</p>
					{/* </h1> */}
					<p>
						{props.hour.toString().padStart(2, 0)}:
						{props.minute.toString().padStart(2, 0)}
					</p>
				</Overlay>
			</div>
		</>
	);
};

Countdown.propTypes = {
	name: PropTypes.string,
	hour: PropTypes.number,
	minute: PropTypes.number,
	onEditInit: PropTypes.func,
	onRemove: PropTypes.func,
	timeNow: PropTypes.shape({
		hour: PropTypes.number,
		minute: PropTypes.number,
		seconds: PropTypes.number,
	}),
};

export default Countdown;
