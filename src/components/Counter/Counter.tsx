import { counterStyle } from './counter.css'

const Counter = ({ count }: { count: number }) => {
  //render count
  const handleCount = () =>
    count === 0 ? 'None Selected' : `Selected ${count}`

  return (
    <div css={counterStyle}>
      <span>{handleCount()}</span>
    </div>
  )
}

export default Counter
