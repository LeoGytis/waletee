import pageSchema from './page-schema.json';
import {DynamicUISchema} from './types';

export const fetchPageSchema = async (): Promise<DynamicUISchema> => {
	await new Promise((resolve) => setTimeout(resolve, 500));

	return pageSchema as DynamicUISchema;
};
