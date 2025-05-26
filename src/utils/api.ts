import pageSchema from './page-schema.json';
import {DynamicUISchema} from './types';

const validateSchema = (schema: any): schema is DynamicUISchema => {
	const violations: string[] = [];

	if (!schema || typeof schema !== 'object') {
		violations.push('Schema must be an object');
	}

	if (!schema?.title || typeof schema.title !== 'string') {
		violations.push('Missing or invalid title field');
	}

	if (!Array.isArray(schema?.components)) {
		violations.push('Components must be an array');
	} else {
		schema.components.forEach((component: any, index: number) => {
			if (!component.type || typeof component.type !== 'string') {
				violations.push(
					`Component at index ${index} must have a type field`
				);
			}

			if (component.type === 'page-title') {
				if (!component.label || typeof component.label !== 'string') {
					violations.push(
						`Page title component at index ${index} must have a label field`
					);
				}
			} else if (component.type === 'checkbox-list-panel') {
				if (
					!component.onSubmit ||
					typeof component.onSubmit !== 'string'
				) {
					violations.push(
						`Checkbox list panel at index ${index} must have an onSubmit field`
					);
				}
				if (!Array.isArray(component.options)) {
					violations.push(
						`Checkbox list panel at index ${index} must have an options array`
					);
				} else {
					component.options.forEach(
						(option: any, optionIndex: number) => {
							if (
								!option.value ||
								typeof option.value !== 'string'
							) {
								violations.push(
									`Option at index ${optionIndex} in checkbox list panel ${index} must have a value field`
								);
							}
							if (
								!option.title ||
								typeof option.title !== 'string'
							) {
								violations.push(
									`Option at index ${optionIndex} in checkbox list panel ${index} must have a title field`
								);
							}
						}
					);
				}
			} else if (component.type) {
				violations.push(
					`Unknown component type: ${component.type} at index ${index}`
				);
			}
		});
	}

	if (violations.length > 0) {
		throw new Error(`${violations.join('\n')}`);
	}

	return true;
};

export const fetchPageSchema = async (): Promise<DynamicUISchema> => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 500));
		const schema = pageSchema as DynamicUISchema;
		validateSchema(schema);
		return schema;
	} catch (error) {
		console.error('Schema validation failed:', error);
		throw error;
	}
};
