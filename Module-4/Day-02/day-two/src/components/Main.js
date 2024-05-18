import React from 'react'
import Counter from './Counter'

export default function Main(props) {
    console.log('props', props)
    const userName = localStorage.getItem('userName')

    return (
        <>
            <h1>Hello {userName}</h1>
            <Counter clickCount={props.clickCount} handleClickCount={props.handleClicks} handleSaveClickCount={props.handleSaveClickCount} handleResetClickCount={props.handleResetClickCount} handleSignout={props.handleSignout} />
        </>
    )
}
