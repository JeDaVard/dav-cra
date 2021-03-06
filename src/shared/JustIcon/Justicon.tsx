import React from "react";
import c from './Justicon.module.scss';
// import sprite from '../../../assets/icons/sprite.svg'
import icons from '../../assets/icons'

interface Props {
    icon: string
    className: any
}

const Justicon = (props: Props) => {
    const Icon = (icons as any)[props.icon]
    return (
        // <svg className={props.className ? props.className : c.Justicon}>
        //     <use href={sprite + `#icon-${props.icon}`} />
        // </svg>
        <Icon className={props.className ? props.className : c.Justicon}/>
    )
}

// const Justicon = props => {
//     let icon = props.icon;
//
//     if (props.icon.includes('-')) {
//         let iA = props.icon.split('-')
//         icon = iA[0] + iA[1][0].toUpperCase() + iA[1].slice(1)
//     }
//
//     console.log(icons[icon])
//     return (
//         <svg className={props.className ? props.className : c.Justicon}>
//             <use href={icons[icon]} />
//         </svg>
//     )
// }

export default Justicon