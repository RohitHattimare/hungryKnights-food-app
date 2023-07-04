import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop(props) {
    return (
        <div className={classes.backdrop} onClick={props.onHide} />
    )
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');
function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onHide={props.onClick} />, portalElement)},
            {ReactDOM.createPortal(
                <ModalOverlay>
                    {props.children}
                </ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;