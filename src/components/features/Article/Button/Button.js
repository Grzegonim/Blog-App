import { Button } from "react-bootstrap";
import styles from  "./Button.module.scss"
const Buttons = ({children, variant, onClick, onSubmit}) => {
  return (
    <Button variant={variant} type="text" onSubmit={onSubmit} onClick={onClick}>{children}</Button>
  )
};

export default Buttons;