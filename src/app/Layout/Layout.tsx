import React from "react";

interface Props {
    header: any
    children: any
    footer: any
}

function Layout(props: Props) {
    return (
        <>
            <header>{props.header}</header>
            <main>
                {props.children}
            </main>
            <footer>{props.footer}</footer>
        </>
    )
}

export default Layout