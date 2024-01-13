export function isValidNumberInput(e) {
	if (
		isNaN(parseInt(e.key, 10)) === false ||
		e.key === "Backspace" ||
		e.key === "Delete"
	)
		return true;
	return e.preventDefault();
}

//org
// export function isValidNumberInput(e) {
// 	if (isNaN(parseInt(e.key, 10)) === true) return e.preventDefault();
// 	return true;
//   }

export function parseInputAsNumber(val) {
	if (val === "") return -1;
	return parseInt(val, 10);
}

export function isValidName(val) {
	if (val.length > 0) return true;
	return false;
}

export function isValidHour(val) {
	if (val >= 0 && val <= 23) return true;
	return false;
}

export function isValidMinute(val) {
	if (val >= 0 && val <= 59) return true;
	return false;
}

export function hourMinutToSeconds(h, m) {
	return h * 3600 + m * 60;
}

export function secondsToHourMinutSecond(s) {
	let seconds = s;
	const hour = Math.floor(seconds / 3600)
		.toString()
		.padStart(2, 0);
	seconds -= hour * 3600;
	const minute = Math.floor(seconds / 60)
		.toString()
		.padStart(2, 0);
	seconds -= minute * 60;
	seconds = seconds.toString().padStart(2, 0);
	return `${hour}:${minute}:${seconds}`;
}
