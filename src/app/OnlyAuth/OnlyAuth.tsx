import React from "react";
import c from './OnlyAuth.module.scss';
import img from './authIllustration.jpg';
import {Link} from "react-router-dom";
import Separator from "../../shared/Separator/Separator";

interface Props {
    login() :void
}

function OnlyAuth(props: Props) {
    return (
        <div className={c.OnlyAuth}>
            <div className="row">
                <div>
                    <h2 className={c.title}>Sign Up</h2>
                    <Separator margin='2 2' color='normal' />
                    <div className={c.content}>
                        <img src={img} alt="" className={c.illustration} />
                        <h2>Button</h2>
                        <div>
                            <h2 className={c.switchText}>Already have account?</h2> <Link to={loc => loc} onClick={props.login}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlyAuth