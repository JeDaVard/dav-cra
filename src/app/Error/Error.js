import React, {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import c from './Error.module.scss';
import './animation.css';

function Error(props) {
    const ref = useRef(null);

    return (
        <CSSTransition
            in={props.show}
            timeout={300}
            nodeRef={ref}
            classNames="error"
            unmountOnExit
        >
            <div className={c.frame} ref={ref}>
                <div className={c.Error} >
                    <div className="row">
                        <div className={c.content} >
                            <h4>{props.children}</h4>
                            <button onClick={props.onClose}>
                                <h4>X</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Error;