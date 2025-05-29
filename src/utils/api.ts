import {validateComponent} from './componentValidations';
import pageSchema from './page-schema.json';
import {DynamicUISchema} from './types';

export const fetchPageSchema = async (): Promise<DynamicUISchema> => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 500));
		const schema = pageSchema as DynamicUISchema;

		// Validate all components in the schema
		schema.components.forEach((component, index) => {
			validateComponent(component, index);
		});

		return schema;
	} catch (error) {
		throw new Error(
			error instanceof Error ? error.message : 'Failed to fetch schema'
		);
	}
};
