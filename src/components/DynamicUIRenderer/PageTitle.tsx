import React from 'react';
import {PageTitleComponent} from '../../utils/types';

interface PageTitleProps {
	component: PageTitleComponent;
}

export const PageTitle: React.FC<PageTitleProps> = ({component}) => {
	return <h1 className="text-lg font-bold mb-6">{component.label}</h1>;
};
