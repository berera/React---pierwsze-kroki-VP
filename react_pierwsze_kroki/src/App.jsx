import React, { Component } from "react";
import Countdown from "./Countdown";
import "./App.css";
import EditEvent from "./EditEvent";
import uniqeid from "uniqid";

class App extends Component {
	constructor() {
		super();
		this.state = {
			now: {
				hour: new Date().getHours(),
				minute: new Date().getMinutes(),
				seconds: new Date().getSeconds(),
			},
			events: [
				{ id: 0, name: "śniadanie", hour: 7, minute: 0 },
				{ id: 1, name: "obiad", hour: 15, minute: 0 },
				{ id: 2, name: "kolacja", hour: 20, minute: 0 },
				{ id: 3, name: "spanie", hour: 23, minute: 0 },
			],
			editedEvent: {
				id: uniqeid(),
				name: "",
				hour: -1,
				minute: -1,
			},
		};

		this.timer = this.timer.bind(this);
		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
		this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
		this.handleEditInit = this.handleEditInit.bind(this);
		this.handleEditCancel = this.handleEditCancel.bind(this);
	}

	timer() {
		this.setState({
			now: {
				hour: new Date().getHours(),
				minute: new Date().getMinutes(),
				seconds: new Date().getSeconds(),
			},
		});
	}

	componentDidMount() {
		const inretvalID = setInterval(this.timer, 1000);
		this.setState({ intervalId: inretvalID });
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
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
		this.setState((prevState) => {
			const editedEventExist = prevState.events.find(
				(el) => el.id === prevState.editedEvent.id
			);
			let updatedEvent;

			if (editedEventExist) {
				updatedEvent = prevState.events.map((el) => {
					if (el.id === prevState.editedEvent.id) return prevState.editedEvent;
					else return el;
				});
			} else {
				updatedEvent = [...prevState.events, prevState.editedEvent];
			}

			return {
				events: updatedEvent,
				editedEvent: { id: uniqeid(), name: "", hour: -1, minute: -1 },
			};
		});
		// this.setState((prevState) => ({
		// 	events: [...prevState.events, prevState.editedEvent],
		// 	editedEvent: {
		// 		id: uniqeid(),
		// 		name: "",
		// 		hour: "",
		// 		minute: "",
		// 	},
		// }));
	}

	handleRemoveEvent(id) {
		this.setState((prevState) => ({
			events: prevState.events.filter((el) => el.id !== id),
		}));
	}

	handleEditInit(id) {
		this.setState((prevState) => ({
			// editedEvent: {...prevState.events[id]}
			editedEvent: { ...prevState.events.find((el) => el.id === id) },
		}));
	}

	handleEditCancel() {
		this.setState({
			editedEvent: {
				id: uniqeid(),
				name: "",
				hour: -1,
				minute: -1,
			},
		});
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
					timeNow={this.state.now}
					onRemove={(id) => this.handleRemoveEvent(id)}
					onEditInit={(id) => this.handleEditInit(id)}
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
					onCancel={() => this.handleEditCancel()}
				/>
				{events}
			</div>
		);
	}
}

export default App;
