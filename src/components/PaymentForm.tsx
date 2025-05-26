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
		return (
			<div className="p-4 bg-white border rounded-lg shadow-lg text-red-500">
				Failed to load Payment Form
			</div>
		);
	}

	return <DynamicUIRenderer schema={schema} />;
};
