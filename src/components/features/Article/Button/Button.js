import { Button } from "react-bootstrap";

const Buttons = ({children, variant}) => {
  return (
    <Button variant={variant} type="text">{children}</Button>
  )
};

export default Buttons;