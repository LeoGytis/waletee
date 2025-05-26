export const validatePageTitleComponent = (
	component: any,
	index: number
): string[] => {
	const violations: string[] = [];

	if (!component.label || typeof component.label !== 'string') {
		violations.push(
			`Page title component at index ${index} must have a label field`
		);
	}

	return violations;
};

export const validateCheckboxListPanelComponent = (
	component: any,
	index: number
): string[] => {
	const violations: string[] = [];

	if (!component.onSubmit || typeof component.onSubmit !== 'string') {
		violations.push(
			`Checkbox list panel at index ${index} must have an onSubmit field`
		);
	}

	if (!Array.isArray(component.options)) {
		violations.push(
			`Checkbox list panel at index ${index} must have an options array`
		);
	} else {
		component.options.forEach((option: any, optionIndex: number) => {
			if (!option.value || typeof option.value !== 'string') {
				violations.push(
					`Option at index ${optionIndex} in checkbox list panel ${index} must have a value field`
				);
			}
			if (!option.title || typeof option.title !== 'string') {
				violations.push(
					`Option at index ${optionIndex} in checkbox list panel ${index} must have a title field`
				);
			}
		});
	}

	return violations;
};

export const validateComponent = (component: any, index: number): string[] => {
	if (!component.type || typeof component.type !== 'string') {
		return [`Component at index ${index} must have a type field`];
	}

	switch (component.type) {
		case 'page-title':
			return validatePageTitleComponent(component, index);
		case 'checkbox-list-panel':
			return validateCheckboxListPanelComponent(component, index);
		default:
			return [
				`Unknown component type: ${component.type} at index ${index}`,
			];
	}
};
