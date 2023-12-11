import { counterStyle } from './counter.css'

const Counter = ({ count }: { count: number }) => {
  return (
    //renders count
    <div css={counterStyle}>
      {count === 0 ? 'None Selected' : `Selected ${count}`}
    </div>
  )
}

export default Counter
