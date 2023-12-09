import React, { useEffect, useRef, useState } from 'react'
import './Pokemon.scss'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import axiso from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Pokemon() {

    gsap.registerPlugin(ScrollTrigger)
    const parent = useRef()
    const [detail, setDetail] = useState(null)
    const navigate = useNavigate()

    const fetchData = async () => {

        const { data } = await axiso(' https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all')
        const arr = data.split("\n");

        const arr1 = arr.map(e => e.slice(e.indexOf(":") + 1));

        let imgArr = [];
        arr1.forEach((e, i) => {
            imgArr.push({ name: e, pic: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${e}.png` })
        });
        setDetail(imgArr)

    }

    console.log(detail);

    const handleDetail = (name) => {
        navigate(`/detail/${name}`)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div ref={parent}>
            <h1 id='detailHead'>DRAGON</h1>
            <div className='pokemon'>
                {
                    detail?.slice(0,6).map((e, i) => (
                        <div key={i} className='pokeBox' onClick={()=>handleDetail(e.name)}>
                            <div><span>{e.name}</span></div>
                            <div><img src={e.pic} alt="" /></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
