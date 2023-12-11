import circle from '../../assets/circle.svg'

const Status = ({ type }: { type: string }) => {
  const handleStatusType = (type: string) => {
    //renders status image when type is active
    switch (type) {
      case 'none':
        return ''
      case 'active':
        return circle
      default:
        ''
    }
  }
  return (
    <img
      aria-label={type}
      aria-labelledby={`${type} status`}
      src={handleStatusType(type)}
    />
  )
}

export default Status
