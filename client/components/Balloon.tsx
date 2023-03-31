interface Props {
  id: number
  img: string
  isVisible: boolean
}

function Balloon(props: Props) {
  return (
    <div>
      <img className="balloon" src={props.img} alt="" />
    </div>
  )
}

export default Balloon