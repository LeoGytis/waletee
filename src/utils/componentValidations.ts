const VALIDATION_ERROR_MESSAGE = 'Failed to validate schema';

const logValidationError = (message: string, details?: any) => {
	console.error('[Validation Error]', message, details || '');
};

export const validatePageTitleComponent = (
	component: any,
	index: number
): void => {
	if (!component.label || typeof component.label !== 'string') {
		const message = `Page title component at index ${index} must have a label field`;
		logValidationError(message, {component});
		throw new Error(VALIDATION_ERROR_MESSAGE);
	}
};

export const validateCheckboxListPanelComponent = (
	component: any,
	index: number
): void => {
	if (!component.onSubmit || typeof component.onSubmit !== 'string') {
		const message = `Checkbox list panel at index ${index} must have an onSubmit field`;
		logValidationError(message, {component});
		throw new Error(VALIDATION_ERROR_MESSAGE);
	}

	if (!Array.isArray(component.options)) {
		const message = `Checkbox list panel at index ${index} must have an options array`;
		logValidationError(message, {component});
		throw new Error(VALIDATION_ERROR_MESSAGE);
	} else {
		component.options.forEach((option: any, optionIndex: number) => {
			if (!option.value || typeof option.value !== 'string') {
				const message = `Option at index ${optionIndex} in checkbox list panel ${index} must have a value field`;
				logValidationError(message, {option, optionIndex});
				throw new Error(VALIDATION_ERROR_MESSAGE);
			}
			if (!option.title || typeof option.title !== 'string') {
				const message = `Option at index ${optionIndex} in checkbox list panel ${index} must have a title field`;
				logValidationError(message, {option, optionIndex});
				throw new Error(VALIDATION_ERROR_MESSAGE);
			}
		});
	}
};

export const validateComponent = (component: any, index: number): void => {
	if (!component.type || typeof component.type !== 'string') {
		const message = `Component at index ${index} must have a type field`;
		logValidationError(message, {component});
		throw new Error(VALIDATION_ERROR_MESSAGE);
	} else {
		try {
			switch (component.type) {
				case 'page-title':
					validatePageTitleComponent(component, index);
					break;
				case 'checkbox-list-panel':
					validateCheckboxListPanelComponent(component, index);
					break;
				default:
					const message = `Unknown component type: ${component.type} at index ${index}`;
					logValidationError(message, {component});
					throw new Error(VALIDATION_ERROR_MESSAGE);
			}
		} catch (error) {
			throw new Error(VALIDATION_ERROR_MESSAGE);
		}
	}
};
