import React from 'react'
import './Range.scss'

export default function Range({ value = '10' }) {
    return (
        <div className='range'>
            <section>
                <div style={{ width: `${value}%` }}></div>
            </section>
        </div>
    )
}
