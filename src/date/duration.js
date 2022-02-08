
const milliseconds = 1
const seconds = 1e3 * milliseconds
const minutes = 60 * seconds
const hours = 60 * minutes
const days = 24 * hours
const weeks = 7 * days
const months = 30 * days
const years = 365 * days

const BASES = {
	milliseconds,
	millisecond: milliseconds,
	seconds,
	second: seconds,
	minutes,
	minute: minutes,
	hours,
	hour: hours,
	days,
	day: days,
	months,
	month: months,
	years,
	year: years,
}

const duration = (value, unit) => {
	const base = BASES[unit]
	return base ? base * value : null
}

module.exports = {
	BASES,
	duration,
}
