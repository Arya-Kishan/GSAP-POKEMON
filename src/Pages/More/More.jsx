import React, { useEffect, useRef, useState } from 'react'
import './More.scss'
import { useNavigate } from 'react-router-dom'
import load from '../../assets/load.svg'
import axios from 'axios'
import gsap from 'gsap'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

let alphabet = "abcsefghijklmnopqrstuvwxyz".split("");
export default function More() {

    const [detail, setDetail] = useState(null)
    const [detail1, setDetail1] = useState(null)
    const parent = useRef(null)
    const filter = useRef(null)
    const navigate = useNavigate()

    const fetchData = async () => {

        const { data } = await axios(' https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all')
        const arr = data.split("\n");

        const arr1 = arr.map(e => e.slice(e.indexOf(":") + 1));

        let imgArr = [];
        arr1.forEach((e, i) => {
            imgArr.push({ name: e, pic: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${e}.png` })
        });
        // console.log(imgArr);
        setDetail(imgArr)
        setDetail1(imgArr)

    }

    const handleDetail = (name) => {
        navigate(`/detail/${name}`)
    }

    const showFilter = () => {

        const gtx = gsap.context(() => {

            gsap.to(".filter1", {
                display: "flex",
                y: -50,
                duration: 1,
                opacity: 1,
            })

        }, parent)

        return () => gtx.revert();
    }

    const hideFilter = () => {

        const gtx = gsap.context(() => {

            gsap.to(".filter1", {
                display: "none",
                y: 20,
                opacity: 0,
                duration: 1,
            })

        }, parent)

        return () => gtx.revert();
    }



    const handleFilter = (e) => {
        let letter = e.target.innerText.toLowerCase()

        if (e.target.innerText.toLowerCase() == "a-z") {
            setDetail(detail1)
        } else {
            let a = detail1.filter((e) => (
                e.name[0] == letter
            ))

            setDetail(a)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='more' ref={parent}>

            <div><h1>POKEMON</h1><h2 onClick={() => showFilter()}>Filter <FilterAltIcon/></h2></div>

            {
                <div>
                    {
                        detail ? (<>
                            {
                                detail?.map((e, i) => (
                                    <div key={i} className='moreCard' onClick={() => {
                                        handleDetail(e.name)
                                    }}>

                                        <div><LazyLoadImage
                                            effect="blur"
                                            src={e.pic} /></div>

                                        <div><span>{e.name}</span></div>

                                    </div>
                                ))
                            }
                        </>) : (<>
                            <img id='loading' src={load} alt="" srcSet="" />
                        </>)
                    }
                </div>
            }

            <div className="filter1" ref={filter}>

                <span>POKEMON NAME START WITH -</span>

                <div>
                    {
                        alphabet.map((e, i) => (
                            <span key={i} onClick={handleFilter}>{e}</span>
                        ))
                    }
                    <span onClick={handleFilter}>a-z</span>
                </div>

                <button onClick={hideFilter}>REMOVE</button>
                
            </div>

        </div>
    )
}
