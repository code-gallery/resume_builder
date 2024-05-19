import { MONTHS_MM } from "../constants";

const clipTextWithEllipsis = (stringToClip, limit) => {
	return stringToClip.length > limit
		? `${stringToClip.substring(0, limit)}…`
		: stringToClip;
};

const debounceFunction = (callbackFunction, timeoutInMilliseconds) => {
	let queuedTimeout;
	return ({ ...params }) => {
		clearTimeout(queuedTimeout);
		queuedTimeout = setTimeout(
			() => callbackFunction({ ...params }),
			timeoutInMilliseconds
		);
	};
};

function isNumeric(string) {
	return !isNaN(parseFloat(string)) && isFinite(string);
}

const getFileNameFromUrl = (fileUrl) => {
	return (fileUrl.split("/") && fileUrl.split("/").pop()) || "";
};

const formatDateDDMMYYYY = (date, seperator) => {
	return `${("0" + date.getDate()).slice(-2)}${seperator ? seperator : "-"}${
		MONTHS_MM[date.getMonth()]
	}${seperator ? seperator : "-"}${date.getFullYear()}`;
};

const formatDateYYYYMMDD = (date) => {
	return `${date.getFullYear()}-${MONTHS_MM[date.getMonth()]}-${(
		"0" + date.getDate()
	).slice(-2)}`;
};

const getDateObjectFromDDMMYYYY = (dateString) => {
	const dateArray = dateString.split("/");
	// const date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
	// return isNaN(date.getTime()) ? new Date() : date;
	return dateArray[2] && dateArray[1] && dateArray[0]
		? new Date(dateArray[2], dateArray[1] - 1, dateArray[0])
		: "";
};

const formatPhoneNumber = (phoneNumber) => {
	return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
		2,
		5
	)} ${phoneNumber.slice(5)}`;
};

const formatTime12HHMM = (date, seperator) => {
	let amOrPm;
	let hours;
	if (date.getHours() > 12) {
		hours = date.getHours() - 12;
		amOrPm = "pm";
	} else {
		hours = date.getHours();
		amOrPm = "am";
	}
	return `${("0" + hours).slice(-2)}${seperator ? seperator : ":"}${(
		"0" + date.getMinutes()
	).slice(-2)}${amOrPm}`;
};

const capitalize = (word) => word[0].toUpperCase() + word.substr(1);

export const utils = {
	clipTextWithEllipsis,
	debounceFunction,
	isNumeric,
	getFileNameFromUrl,
	formatDateDDMMYYYY,
	formatDateYYYYMMDD,
	getDateObjectFromDDMMYYYY,
	formatPhoneNumber,
	formatTime12HHMM,
	capitalize,
};
