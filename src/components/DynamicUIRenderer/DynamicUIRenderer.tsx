import React from 'react';
import {
	CheckboxListPanelComponent,
	Component,
	DynamicUISchema,
	PageTitleComponent,
} from '../../utils/types';
import {CheckboxListPanel} from './CheckboxListPanel';
import {PageTitle} from './PageTitle';

interface DynamicUIRendererProps {
	schema: DynamicUISchema;
}

const renderComponent = (component: Component) => {
	switch (component.type) {
		case 'page-title':
			return <PageTitle component={component as PageTitleComponent} />;
		case 'checkbox-list-panel':
			return (
				<CheckboxListPanel
					component={component as CheckboxListPanelComponent}
				/>
			);
		default:
			console.warn(`Unknown component type: ${(component as any).type}`);
			return null;
	}
};

export const DynamicUIRenderer: React.FC<DynamicUIRendererProps> = ({
	schema,
}) => {
	return (
		<div className="w-[412px] mx-auto py-6 px-5 bg-white border rounded-lg shadow-lg">
			{schema.components.map((component, index) => (
				<div key={index}>{renderComponent(component)}</div>
			))}
		</div>
	);
};
