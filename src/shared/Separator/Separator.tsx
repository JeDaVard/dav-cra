import React from "react";
import c from './Separator.module.scss';

interface Props {
    vertical?: string
    margin?: string
    height?: string
    width?: string
    color: string
}

const Separator = (props: Props) => {
    const styles: any = {
        margin: props.vertical ? (
            `${props.margin ? `0  ${props.margin.split(' ')[1]}rem 0 ${props.margin.split(' ')[0]}rem`: '0'}`
        ) : (
            `${props.margin ? props.margin.split(' ')[0]+'rem 0 ' + props.margin.split(' ')[1]+'rem 0': '0'}`
        )
    }

    if (props.height) styles.height = props.height+'rem';
    if (props.width) styles.width = props.width+'rem';

    return (
        <>
            {props.vertical ? (
                <div className={[c.vertical, c[props.color]].join(' ')} style={styles}> </div>
            ) : (
                <div className={[c.Separator, c[props.color]].join(' ')} style={styles}> </div>
            )}
        </>
    )
}

export default Separator