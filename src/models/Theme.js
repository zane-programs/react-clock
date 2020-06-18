class Theme {
	constructor(foregroundColor, backgroundColor) {
		this.foregroundColor = foregroundColor;
		this.backgroundColor = backgroundColor;
	}

	get foreground() {
		return this.foregroundColor;
	}

	get background() {
		return this.backgroundColor;
	}
}

export default Theme;