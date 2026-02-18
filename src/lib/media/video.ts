export function getVideoType(src: string) {
	if (src.endsWith('.mp4')) return 'video/mp4';
	if (src.endsWith('.webm')) return 'video/webm';
	return 'video/mp4';
}
