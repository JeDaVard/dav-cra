import React, {useRef} from 'react';
import classes from './BackDrop.module.scss';
import { CSSTransition } from 'react-transition-group';
import './animation.css';

interface Props {
    showBackdrop: boolean
    onClick(): void
}

const BackDrop = (props: Props) => {
    const ref = useRef(null);

    return (
        <CSSTransition
            nodeRef={ref}
            in={props.showBackdrop}
            timeout={350}
            classNames="backdrop"
            unmountOnExit
        >
            <div ref={ref}
                 className={classes.BackDrop}
                 onClick={props.onClick}
            />
        </CSSTransition>
    )
}

export default BackDrop;
