import React, {useState} from 'react';
import searchIcon from '../../svg/search.svg';
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
	const [searchQuery, setSearchQuery] = useState('');

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

	const handleReset = () => {
		setSelectedOptions([]);
		setSearchQuery('');
	};

	const filteredOptions = component.options.filter((option) => {
		const searchLower = searchQuery.toLowerCase();
		return (
			option.title.toLowerCase().includes(searchLower) ||
			(option.subtitle &&
				option.subtitle.toLowerCase().includes(searchLower))
		);
	});

	return (
		<div className="px-5 py-6 space-y-5 bg-white border rounded-lg shadow-lg">
			<div className="relative">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Search for Payment Method"
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
				/>
				<img
					src={searchIcon}
					alt="Search"
					className="absolute transform -translate-y-1/2 right-4 top-1/2"
				/>
			</div>
			<div className="space-y-2.5 max-h-[204px] w-[372px] overflow-y-auto">
				{filteredOptions.map((option) => (
					<label
						key={option.value}
						className={`flex gap-4 ${
							option.disabled && 'opacity-50 cursor-not-allowed'
						}`}
					>
						<input
							type="checkbox"
							checked={selectedOptions.includes(option.value)}
							onChange={() => handleCheckboxChange(option.value)}
							disabled={option.disabled}
							className="size-5 cursor-pointer mt-1.5"
						/>

						<div className="flex-1">
							<div className="font-semibold">{option.title}</div>
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
			<div className="flex items-center justify-between">
				<button
					onClick={handleReset}
					className="px-4 py-2 font-bold text-primary"
				>
					Reset
				</button>
				<button
					onClick={handleSubmit}
					className="px-4 py-2 font-bold text-white rounded-lg bg-primary"
				>
					Submit
				</button>
			</div>
		</div>
	);
};
