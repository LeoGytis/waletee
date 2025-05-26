export interface PageTitleComponent {
	type: 'page-title';
	label: string;
}

export interface CheckboxOption {
	value: string;
	title: string;
	subtitle: string;
	imageUrl: string;
	checked?: boolean;
	disabled?: boolean;
}

export interface CheckboxListPanelComponent {
	type: 'checkbox-list-panel';
	onSubmit: string;
	options: CheckboxOption[];
}

export type Component = PageTitleComponent | CheckboxListPanelComponent;

export interface DynamicUISchema {
	title: string;
	components: Component[];
}
