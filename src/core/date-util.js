// clock display
const convertHoursToTwelveHour = hours => {
	if (hours === 0)
		return 12;
	else
		return (hours % 12 || hours);
};
const padNumMinsOrSec = val => {
	// pads num less than 10 with 0 on left
	let str = val.toString();
	if (val < 10) str = "0" + str;
	return str;
};
const amOrPm = hours => (hours >= 12) ? 'PM' : 'AM';
const displayTimeFormatted = date => `${convertHoursToTwelveHour(date.getHours())}:${padNumMinsOrSec(date.getMinutes())}:${padNumMinsOrSec(date.getSeconds())} ${amOrPm(date.getHours())}`;
// end clock display

const convertHoursForClockHand = hours => (hours >= 12) ? hours - 12 : hours;

export {
	displayTimeFormatted,
	convertHoursForClockHand
};