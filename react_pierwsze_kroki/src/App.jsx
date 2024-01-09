import React, { Component } from "react";
import Countdown from "./Countdown";
import "./App.css";
import EditEvent from "./EditEvent";
import uniqeid from "uniqid";

class App extends Component {
	constructor() {
		super();
		this.state = {
			events: [
				// { id: 0, name: "śniadanie", hour: "07", minute: "00" },
				// { id: 1, name: "obiad", hour: "15", minute: "00" },
				// { id: 2, name: "kolacja", hour: "19", minute: "00" },
			],
			editedEvent: {
				id: uniqeid(),
				name: "",
				hour: "",
				minute: "",
			},
		};

		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
		this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
	}

	handleEditEvent(val) {
		// this.setState({ editedEvents: val });
		this.setState((prevState) => {
			return {
				editedEvent: Object.assign(prevState.editedEvent, val),
			};
		});
	}

	handleSaveEvent() {
		this.setState((prevState) => ({
			events: [...prevState.events, prevState.editedEvent],
			editedEvent: {
				id: uniqeid(),
				name: "",
				hour: "",
				minute: "",
			},
		}));
	}

	handleRemoveEvent(id) {
		this.setState((prevState) => ({
			events: prevState.events.filter((el) => el.id !== id),
		}));
	}

	render() {
		const events = this.state.events.map((el) => {
			return (
				<Countdown
					key={el.id}
					id={el.id}
					name={el.name}
					hour={el.hour}
					minute={el.minute}
					onRemove={(id) => this.handleRemoveEvent(id)}
				/>
			);
		});
		return (
			<div className="app">
				<EditEvent
					name={this.state.editedEvent.name}
					hour={this.state.editedEvent.hour}
					minute={this.state.editedEvent.minute}
					onInputChange={(val) => this.handleEditEvent(val)}
					onSave={() => this.handleSaveEvent()}
				/>
				{events}
			</div>
		);
	}
}

export default App;
