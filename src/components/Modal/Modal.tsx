import React, {ReactChild, useEffect, useRef} from "react";
import ReactDOM from 'react-dom'
import c from './Modal.module.scss';
import { CSSTransition } from "react-transition-group";
import BackDrop from "../BackDrop/BackDrop";
import Separator from "../../shared/Separator/Separator";
import OutsideAlerter from "../../utils/EventDelegator";
import Justicon from "../../shared/JustIcon/Justicon";
import './animation.css';

interface Props {
    show: boolean
    onClick(): void
    children: any
    title: string
}

function Modal(props: Props): ReactChild {
    const { onClick, show } = props
    const nodeRef = useRef(null);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [show])

    const closeModal = () => {
        document.body.style.overflow = 'auto'
        onClick()
    }

    return ReactDOM.createPortal(
        <>
            <BackDrop  onClick={closeModal} showBackdrop={show} />
            <CSSTransition
                nodeRef={nodeRef}
                in={show}
                timeout={550}
                classNames='modal'
                unmountOnExit
            >
                <div className={c.Modal} ref={nodeRef}>
                    <OutsideAlerter delegate={closeModal}>
                            <header className={c.header}>
                                <h1>{props.title}</h1>
                                <button onClick={closeModal}>
                                    <Justicon icon={'x'} className={c.closeIcon}/>
                                </button>
                            </header>
                            <Separator color={'light'}/>
                            <main className={c.main}>
                                {props.children}
                            </main>
                    </OutsideAlerter>
                </div>
            </CSSTransition>
        </>,
        document.getElementById('modal') as HTMLDivElement
    )
}

export default Modal