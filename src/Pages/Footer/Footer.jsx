import React, { useState } from 'react'
import './Footer.scss'
import search from '../../assets/1.png'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleClick = () => {
        navigate(`/detail/${input}`)
    }


    return (
        <div className='footer'>

            <div className="footerSec1">

                <h1>SEARCH POKEMON</h1>
                <div className='input'><input type="text" value={input} onChange={(e) => setInput(e.target.value)} /><button onClick={handleClick}>SEARCH</button></div>

            </div>

            <div className="footerSec2">
                <img src={search} alt="" srcSet="" />
            </div>

        </div>
    )
}
