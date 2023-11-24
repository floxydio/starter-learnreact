import React from 'react'

export default function TodoList({ title, description }) {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    )
}
