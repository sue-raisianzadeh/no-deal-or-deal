interface Props {
  id: number
  img: string
  isVisible: boolean
}

function Balloon(props: Props) {
  return (
    <div>
      <img src={props.img} />
    </div>
  )
}

export default Balloon
