export const getLastPageFromLink = (link) => {
	const result = link.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);

	return Number(result[1]);
};
