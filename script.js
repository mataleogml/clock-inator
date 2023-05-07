var hours, minutes, to, past, nbsps;
var progress;
var chars = 'abcdefghijklmnopqrstuvwxyz';

const updateTimeOfDay = () => {
	const now = new Date();
	const hour = now.getHours();
	
	if (hour >= 5 && hour < 12) { // Morning
		$('#time_Morning').addClass('on');
	} else if (hour >= 12 && hour < 18) { // Afternoon
		$('#time_Afternoon').addClass('on');
	} else if (hour >= 18 && hour < 22) { // Evening
		$('#time_Evening').addClass('on');
	} else { // Night
		$('#time_Night').addClass('on');
	}
	
	setTimeout(updateTimeOfDay, 5 * 1000); // Check every 5 seconds
};

  

const updateClock = () => {
	const now = new Date();
	const hour = now.getHours() % 12;
	const minute = Math.floor(now.getMinutes());
	const singleDigit = $('#SingleDigit');

	Object.values(minutes).forEach(minuteEl => minuteEl.removeClass('on'));
	Object.values(hours).forEach(hourEl => hourEl.removeClass('on'));

	hours[hour].addClass('on');
	singleDigit.removeClass('on');

	if (minute > 0 && minute < 10) { // For values between 1 - 9
		singleDigit.addClass('on');
		minutes[minute].addClass('on');
	} else if (minute > 0 && minute < 20) { // For values between 1 - 19
		minutes[minute].addClass('on');
	} else if (minute % 10 === 0) { // For multiples of 10
		minutes[minute].addClass('on');
	} else { // For all other two-digit numbers
		const tens = Math.floor(minute / 10) * 10;
		const ones = minute % 10;
		minutes[tens].addClass('on');
		minutes[ones].addClass('on');
	}

	const next = new Date(now.getTime() + 1 * 60 * 1000); // Update this line to 1 minute
	console.log((next - now) / 1000);
	setTimeout(updateClock, next - now);
};

var adjustProgress = function () {
	var now = new Date();
	var passed = (now.getMinutes() % 5) * 60 + now.getSeconds();
	var percent = passed / (5 * 60) * 100;

	progress.width(percent + '%')
		.css('transition', 'width 1s linear');

	if (percent < .5) {
		progress.hide();
		setTimeout(function () {
			progress.fadeIn();
		}, 500);
	}

	setTimeout(adjustProgress, 1000);
};

const first = () => {
	const charsLength = chars.length;

	nbsps.each(function () {
		const c = chars.charAt(Math.floor(Math.random() * charsLength));
		$(this).text(c);
	});

	setTimeout(() => progress.fadeIn(), 1000);
};


$(function () {
	minutes = {
		0: $('#clock #m_0'),
		1: $('#clock #m_1'),
		2: $('#clock #m_2'),
		3: $('#clock #m_3'),
		4: $('#clock #m_4'),
		5: $('#clock #m_5'),
		6: $('#clock #m_6'),
		7: $('#clock #m_7'),
		8: $('#clock #m_8'),
		9: $('#clock #m_9'),
		10: $('#clock #m_10'),
		11: $('#clock #m_11'),
		12: $('#clock #m_12'),
		13: $('#clock #m_13'),
		14: $('#clock #m_14'),
		15: $('#clock #m_15'),
		16: $('#clock #m_16'),
		17: $('#clock #m_17'),
		18: $('#clock #m_18'),
		19: $('#clock #m_19'),
		20: $('#clock #m_20'),
		30: $('#clock #m_30'),
		40: $('#clock #m_40'),
		50: $('#clock #m_50'),
	};

	hours = {
		0: $('#clock #h_0'),
		1: $('#clock #h_1'),
		2: $('#clock #h_2'),
		3: $('#clock #h_3'),
		4: $('#clock #h_4'),
		5: $('#clock #h_5'),
		6: $('#clock #h_6'),
		7: $('#clock #h_7'),
		8: $('#clock #h_8'),
		9: $('#clock #h_9'),
		10: $('#clock #h_10'),
		11: $('#clock #h_11'),
	}

	to = $('#clock #to');
	past = $('#clock #past');

	nbsps = $('#clock .nbsp');

	progress = $('#progressbar');


	updateClock();
	adjustProgress();
	updateTimeOfDay();
	first();
});
