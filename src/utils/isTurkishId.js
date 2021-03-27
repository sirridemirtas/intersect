function isTurkishId(t) {
	t = String(t)
	if (!t.match(/^[1-9][0-9]{9}[02468]$/)) return false
	for (var c = 0; c < 11; c++)
		eval('var ' + 'TurkishIDNO'.charAt(c) + '=' + t.charAt(c));
	if ((10 - ((T + r + i + h + D) * 3 + u + k + s + I) % 10) % 10 != N
		|| (10 - ((u + k + s + I + N) * 3 + T + r + i + h + D) % 10) % 10 != O) return false
	return true
}

module.exports = isTurkishId