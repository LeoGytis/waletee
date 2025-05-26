import React, {useEffect} from 'react';
import {PageTitleComponent} from '../../utils/types';

interface PageTitleProps {
	component: PageTitleComponent;
}

export const PageTitle: React.FC<PageTitleProps> = ({component}) => {
	useEffect(() => {
		document.title = component.label;
	}, [component.label]);

	return null;
};
