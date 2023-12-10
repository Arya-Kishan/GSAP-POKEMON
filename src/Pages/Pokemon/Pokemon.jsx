import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
        if (window.innerWidth <= 545) {
            setDetail(imgArr.slice(0,5))
        }else if(window.innerWidth >= 546){
            setDetail(imgArr.slice(0,12))
        }
        console.log(typeof(window.innerWidth));

    }

    // console.log(detail);

    const handleDetail = (name) => {
        navigate(`/detail/${name}`)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div ref={parent}>
            <div className='pokemon'>
                {
                    detail?.map((e, i) => (
                        <div key={i} className='pokeBox' onClick={() => handleDetail(e.name)}>
                            <div><span>{e.name}</span></div>
                            <div><img id='pokImg' src={e.pic} alt="" /></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
