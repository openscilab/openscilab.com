import { useLocation, useHistory } from 'react-router-dom';
import { urlHashes as getHashesArray } from '../../Utils/String';

const useHash = () => {
	const { replace } = useHistory();
	const { hash: urlHash, search, pathname } = useLocation();

	const urlHashes = getHashesArray(urlHash);

	const hasHash = (...hashes: string[]) => hashes?.every(h => urlHashes?.includes(h));

	const addHash = async (...hashes: string[]) => {
		const canAddHashes = hashes?.filter(h => !urlHashes?.includes(h));
		if (canAddHashes?.length === 0) return;
		replace(pathname + search + urlHash + '#' + canAddHashes?.join('#'));
	};

	const removeHash = async (...hashes: string[]) => {
		const canRemoveHashes = hashes?.filter(h => urlHashes?.includes(h));
		if (canRemoveHashes?.length === 0) return;
		let removedHashes = urlHash;
		canRemoveHashes?.forEach(crm => (removedHashes = removedHashes?.replace(`#${crm}`, '')));
		replace(pathname + search + removedHashes);
	};

	const modifyHash = (add: string[] = [], remove: string[] = []) => {
		let modifiedHash = urlHash;
		remove?.forEach(rh => hasHash(rh) && (modifiedHash = modifiedHash?.replace(`#${rh}`, '')));
		add?.forEach(ah => !hasHash(ah) && (modifiedHash = `#${ah}` + modifiedHash));
		replace(pathname + search + modifiedHash);
	};

	return {
		hasHash,
		addHash,
		removeHash,
		modifyHash,
		hashes: urlHashes,
	};
};

export default useHash;
