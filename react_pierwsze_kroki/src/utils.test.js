import { secondsToHourMinutSecond } from "./utils";

test("", () => {
	expect(secondsToHourMinutSecond(3600)).toBe("01:00:00");
});
