import React, {useEffect} from 'react';
import {PageTitleComponent} from '../../utils/types';

interface PageTitleProps {
	component: PageTitleComponent;
	schemaTitle: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
	component,
	schemaTitle,
}) => {
	useEffect(() => {
		document.title = schemaTitle;
	}, [schemaTitle]);

	return <h1 className="text-2xl font-bold">{component.label}</h1>;
};
