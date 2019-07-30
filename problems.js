const wasteTime = (n) => {
	let widget = 0
	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			widget += Math.sqrt(Math.atan(Math.random()**(i*Math.random() / j) / Math.PI))
			widget += i**j - j**i
		}
	}
}

const measureTime = (func, param) => {
	const now = new Date()
	if (param) {
		func(...param)
	} else {
		func()
	}
	const later = new Date() - now
	return later
}

const dateDescending = (date1, date2) => {
	if (date1 > date2) return 1
	else if (date2 > date1) return -1
	else return 0
}

const orderDates = (date_list) => {
	return date_list.sort(dateDescending)
}

const sortPastPresFutu = (date_list) => {
	now = new Date()

	object = {
		past: [],
		present: [],
		future: [],
	}

	date_list.forEach((date) => {
		if (date.getDay() == now.getDay()) {
			object['present'].push(date)
		} else if (date < now) {
			object['past'].push(date)
		} else if (date > now) {
			object['future'].push(date)
		}
	})

	return object
}

console.log(measureTime(wasteTime, [1000]))
console.log()
console.log(orderDates([new Date(), new Date('10/12/88'), new Date('4/21/42'), new Date('9/2/90')]))
console.log()
console.log(sortPastPresFutu([new Date(), new Date('10/12/88'), new Date('4/21/42'), new Date('9/2/90')]))
