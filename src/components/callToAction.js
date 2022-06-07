import {Button} from "react-bootstrap";
import '../styles/button.css'

const CallToAction = ({children}) => {

    return(
        <Button variant={'light'} className={'btn'}>{children}</Button>
    )
}
export default CallToAction
