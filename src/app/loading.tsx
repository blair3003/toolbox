import Loader from '@/components/Loader'

export default function Loading() {

	return (
		<div className="absolute inset-0 grid place-content-center">
			<Loader />
		</div>
	)
}