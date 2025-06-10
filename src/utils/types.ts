export interface PageTitleComponent {
	type: 'page-title';
	label: string;
}

export interface CheckboxOption {
	value: string;
	title: string;
	subtitle?: string;
	imageUrl?: string;
	checked?: boolean;
	disabled?: boolean;
}

export interface CheckboxListPanelComponent {
	type: 'checkbox-list-panel';
	onSubmit: string;
	options: CheckboxOption[];
}

// Type mapping for all component types
export interface ComponentTypeMap {
	'page-title': PageTitleComponent;
	'checkbox-list-panel': CheckboxListPanelComponent;
	// 'new-component': CheckboxListPanelComponent;
}

export type Component = ComponentTypeMap[keyof ComponentTypeMap];

export interface DynamicUISchema {
	title: string;
	components: Component[];
}
