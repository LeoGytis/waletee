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
		<div className="py-6 px-5 space-y-5">
			<div>Search is here</div>
			<div className="space-y-2.5 max-h-[204px] overflow-y-auto">
				{component.options.map((option) => (
					<label
						key={option.value}
						className={`flex items-center gap-4 cursor-pointer ${
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
			</div>
			<div className="flex justify-between items-center">
				<button className="px-4 py-2 text-primary ">Reset</button>
				<button
					onClick={handleSubmit}
					className="px-4 py-2 bg-primary text-white rounded-lg"
				>
					Submit
				</button>
			</div>
		</div>
	);
};
