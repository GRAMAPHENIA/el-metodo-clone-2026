export default function MarketingHead() {
	return (
		<>
			<link
				rel='preload'
				href='/videocorto.mp4'
				as='video'
				type='video/mp4'
				fetchPriority='high'
			/>
			<link
				rel='preload'
				href='/flyerComienzo.svg'
				as='image'
				type='image/svg+xml'
				fetchPriority='high'
			/>
		</>
	);
}
