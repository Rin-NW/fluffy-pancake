module.exports = function rand(min, max) {
	return min + Math.floor((max - min + 1) * Math.random());
}
