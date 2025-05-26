import React, {useState} from 'react';
import {CheckboxListPanelComponent} from '../../utils/types';

interface CheckboxListPanelProps {
	component: CheckboxListPanelComponent;
}

export const CheckboxListPanel: React.FC<CheckboxListPanelProps> = ({
	component,
}) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>(
		component.options.filter((opt) => opt.checked).map((opt) => opt.value)
	);

	const handleCheckboxChange = (value: string) => {
		setSelectedOptions((prev) => {
			if (prev.includes(value)) {
				return prev.filter((v) => v !== value);
			}
			return [...prev, value];
		});
	};

	const handleSubmit = () => {
		if (component.onSubmit === 'logToConsole') {
			console.log('Selected options:', selectedOptions);
		}
	};

	return (
		<div className="space-y-2.5">
			{component.options.map((option) => (
				<label
					key={option.value}
					className={`flex items-center p-1 gap-4 cursor-pointer ${
						option.disabled
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-gray-50'
					}`}
				>
					<input
						type="checkbox"
						checked={selectedOptions.includes(option.value)}
						onChange={() => handleCheckboxChange(option.value)}
						disabled={option.disabled}
						className="w-5 h-5"
					/>

					<div className="flex-1">
						<div className="font-medium">{option.title}</div>
						{option.subtitle && (
							<div className="text-sm text-gray-500">
								{option.subtitle}
							</div>
						)}
					</div>
					{option.imageUrl && (
						<img
							src={option.imageUrl}
							alt={option.title}
							className="w-8 h-8 mr-4"
						/>
					)}
				</label>
			))}
			<button
				onClick={handleSubmit}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
			>
				Submit
			</button>
		</div>
	);
};
