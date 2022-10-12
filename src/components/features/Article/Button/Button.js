import { Button } from "react-bootstrap";
import styles from  "./Button.module.scss"
const Buttons = ({children, variant, onClick}) => {
  return (
    <Button variant={variant} type="text" onClick={onClick}>{children}</Button>
  )
};

export default Buttons;