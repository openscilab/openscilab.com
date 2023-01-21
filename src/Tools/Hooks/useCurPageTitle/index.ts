import { useEffect } from 'react';
import { useData } from '../useData/index';
import { useHistory } from 'react-router-dom';

const useCurPageTitle = (title: string | undefined) => {
	const { listen, location } = useHistory();
	const { data } = useData({ title: document?.title, path: location?.pathname }, [title]);

	useEffect(() => {
		if (!title) return;
		document.title = title;
	}, [title]);

	useEffect(
		() =>
			listen(({ pathname }) => {
				if (pathname === data?.path) return;
				document.title = data?.title;
			}),
		[title]
	);
};

export default useCurPageTitle;
