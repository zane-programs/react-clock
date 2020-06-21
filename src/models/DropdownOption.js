class DropdownOption {
	constructor(value) {
		this.actualVal = value;
		this.nameVal = value.charAt(0).toUpperCase() + value.substring(1);
	}

	get value() {
		return this.actualVal;
	}

	get name() {
		return this.nameVal;
	}
}

export default DropdownOption;