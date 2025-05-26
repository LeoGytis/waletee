import {useEffect, useState} from 'react';
import {fetchPageSchema} from '../utils/api';
import {DynamicUISchema} from '../utils/types';
import {DynamicUIRenderer} from './DynamicUIRenderer/DynamicUIRenderer';

export const PaymentForm = () => {
	const [schema, setSchema] = useState<DynamicUISchema | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadSchema = async () => {
			try {
				const data = await fetchPageSchema();
				setSchema(data);
			} catch (error) {
				console.error('Failed to fetch schema:', error);
			} finally {
				setLoading(false);
			}
		};

		loadSchema();
	}, []);

	if (loading) {
		return <span>Loading...</span>;
	}

	if (!schema) {
		return <span className="text-red-500">Failed to load page schema</span>;
	}

	return <DynamicUIRenderer schema={schema} />;
};
