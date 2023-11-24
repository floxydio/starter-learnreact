import React from 'react'

export default function Container({ children }) {
    return (
        <div style={{
            margin: '0 auto',
            maxWidth: 640,
            padding: '0 1.0875rem 1.45rem',
            marginTop: 40

        }}>
            {children}
        </div>
    )
}
