import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Pokemon.scss'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import axiso from 'axios'
import { useNavigate } from 'react-router-dom'
import load from '../../assets/load.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Pokemon() {

    gsap.registerPlugin(ScrollTrigger)
    const parent = useRef()
    const main = useRef()
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
            setDetail(imgArr.slice(0, 15))
        } else if (window.innerWidth >= 546) {
            setDetail(imgArr.slice(0, 40))
        }

    }

    // console.log(detail);

    const handleDetail = (name) => {
        navigate(`/detail/${name}`)
    }

    const handleLoad = (e) => {

        let diff = Math.floor(Math.abs(e.target.getBoundingClientRect().bottom - main.current.getBoundingClientRect().bottom))

        if (diff < 70) {
            console.log(e.target.parentElement.parentElement.parentElement);
            e.target.parentElement.parentElement.parentElement.style.display = 'none';
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div ref={parent}>
            <div className='pokemon' ref={main}>
                {
                    detail?(<>
                    {
                        detail?.map((e, i) => (
                            <div key={i} className='pokeBox' onClick={() => handleDetail(e.name)} onLoad={handleLoad}>
                                <div><span>{e.name}</span></div>
                                <div><LazyLoadImage
                                        effect="blur"
                                        src={e.pic} /></div>
                            </div>
                        ))
                    }
                    </>):(<>
                    <img id='loading' src={load} alt="" srcSet="" />
                    </>)
                }
            </div>
        </div>
    )
}
