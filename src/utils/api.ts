import {validateComponent} from './componentValidations';
import pageSchema from './page-schema.json';
import {DynamicUISchema} from './types';

export const fetchPageSchema = async (): Promise<DynamicUISchema> => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 500));
		const schema = pageSchema as DynamicUISchema;

		// Validate all components in the schema
		const violations: string[] = [];
		schema.components.forEach((component, index) => {
			const componentViolations = validateComponent(component, index);
			violations.push(...componentViolations);
		});

		if (violations.length > 0) {
			throw new Error(
				`Schema validation failed: ${violations.join(', ')}`
			);
		}

		return schema;
	} catch (error) {
		console.error('Schema validation failed:', error);
		throw error;
	}
};
