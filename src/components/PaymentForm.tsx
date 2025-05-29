import {useEffect, useState} from 'react';
import {fetchPageSchema} from '../utils/api';
import {DynamicUISchema} from '../utils/types';
import {DynamicUIRenderer} from './DynamicUIRenderer/DynamicUIRenderer';

export const PaymentForm = () => {
	const [schema, setSchema] = useState<DynamicUISchema | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadSchema = async () => {
			try {
				const data = await fetchPageSchema();
				setSchema(data);
				setError(null);
			} catch (error) {
				setError(
					error instanceof Error
						? error.message
						: 'Failed to load Payment Form'
				);
			} finally {
				setLoading(false);
			}
		};

		loadSchema();
	}, []);

	if (loading) {
		return <span>Loading...</span>;
	}

	if (error) {
		return (
			<div className="p-4 text-red-500 bg-white border rounded-lg shadow-lg">
				{error}
			</div>
		);
	}

	if (!schema) {
		return null;
	}

	return <DynamicUIRenderer schema={schema} />;
};
