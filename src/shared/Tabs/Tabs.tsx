import React, {useCallback, useState} from "react";
import c from './Tabs.module.scss';

interface Props {
    children: any
    defaultTab: any
}

function Tabs({ children, defaultTab } : Props) {
    const queryTabExist = children.find((child: any) => child.props.label === defaultTab)
    const initialTab = queryTabExist ? queryTabExist.props.label : children[0].props.label

    const [ activeTab, setActiveTab ] = useState(initialTab)
    const handleActiveTab = useCallback(label => setActiveTab(label), [])

    const tabs = children.map( (child: any) => (
            <button
                onClick={e => {
                    e.preventDefault();
                    handleActiveTab(child.props.label)
                }}
                className={activeTab === child.props.label ? c.activeButton : c.button}
                key={child.props.label}
            >
                {child.props.tabName}
            </button>
        )
    )
    const tabContent = children.filter( (child: any) => child.props.label === activeTab)
    return (
        <>
            <div className={c.box}>
                {tabs}
            </div>
            <div>
                {tabContent}
            </div>
        </>
    )
}

function Tab(props: any) {
    return <>{props.children}</>
}

export { Tabs, Tab}
// function Tabing({ children }) {
//     const [ activeTab, setActiveTab ] = useState(children[0].props.label)
//
//     const handleActiveTab = useCallback(label => setActiveTab(label), [])
//
//     return (
//         <div>
//             <div>
//                 {children.map( child => {
//                     const { label, tabComponent } = child.props
//                     const Tab = tabComponent || 'div'
//                     return (
//                         <Tab onClick={e => {
//                             e.preventDefault()
//                             handleActiveTab(label)
//                         }} />
//                     )
//                 })}
//             </div>
//             <div>
//                 {children.map( child => {
//                     if (child.props.label !== activeTab) return undefined
//                         return child
//                 })}
//             </div>
//         </div>
//     )
// }