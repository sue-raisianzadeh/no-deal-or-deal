import { useState } from "react";
import { useNavigate } from "react-router-dom";
import balloons from "../../data/balloonData";

interface Props {
  updateFeed: React.Dispatch<
    React.SetStateAction<typeof balloons>
  >;
  list: typeof balloons
}


function Auth(props: Props) {
  const [button, setButton] = useState({
    row: '',
    col: '',
  });
  const navigator = useNavigate();

  function handleSubmit() {
    props.updateFeed((data) => [...data]);
    navigator('/prize');
  }

  return (
    <>
      <div>Auth component</div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Auth