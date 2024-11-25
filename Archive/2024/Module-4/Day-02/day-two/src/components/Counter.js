import React from 'react'

export default function Counter(props) {
  return (
    <>
        <p>Current clicks: {props.clickCount}</p>
        <p>
            <button onClick={props.handleClickCount}>Increase click count</button>
        </p>
        <p>
            <button onClick={props.handleSaveClickCount}>Save click count</button>
        </p>
        <p>
            <button onClick={props.handleResetClickCount}>Reset click count</button>
        </p>

        <p>
            <button onClick={props.handleSignout}>Sign out</button>
        </p>
    </>
  )
}
