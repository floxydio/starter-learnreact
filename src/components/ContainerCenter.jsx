import React from 'react'

export default function ContainerCenter({ children }) {
    return (
        <div style={{
            margin: '0 auto',
            maxWidth: 640,
            padding: '0 1.0875rem 1.45rem',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

        }}>
            {children}
        </div>
    )
}
