
import circle from '../assets/circle.svg'

const Status = ({ type }: { type: string }) => {

	const handleStatusType = (type: string) => {
		switch (type) {
			case 'none':
				return '';
			case 'active':
				return circle
			default: ''
		}
	}
	return (<img src={handleStatusType(type)} />)
}


export default Status