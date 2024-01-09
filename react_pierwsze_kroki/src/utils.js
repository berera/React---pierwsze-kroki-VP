export function isValidNumberInput(e) {
	if (
		isNaN(parseInt(e.key, 10)) === false ||
		e.key === "Backspace" ||
		e.key === "Delete"
	)
		return true;
	return e.preventDefault();
}
