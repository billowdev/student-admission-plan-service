export const isAllValuesUndefined = (obj: Record<string, any>): boolean => {
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
			return false;
		}
	}
	return true;
}

export default isAllValuesUndefined