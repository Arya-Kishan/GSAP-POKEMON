import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Card.scss'
import second from '../../assets/2.jpg'
import third from '../../assets/3.jpg'
import fourth from '../../assets/4.jpg'
import fifth from '../../assets/5.jpg'
import sixth from '../../assets/6.jpg'
import Range from '../../components/Range'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Card() {
    gsap.registerPlugin(ScrollTrigger)
    const parent = useRef()
    const navigate = useNavigate()

    const [detail, setDetail] = useState(null)

    const fetchData = async () => {

        const request2 = fetch('https://pokeapi.co/api/v2/pokemon/2').then(response => response.json());
        const request3 = fetch('https://pokeapi.co/api/v2/pokemon/3').then(response => response.json());
        const request4 = fetch('https://pokeapi.co/api/v2/pokemon/4').then(response => response.json());
        const request5 = fetch('https://pokeapi.co/api/v2/pokemon/5').then(response => response.json());
        const request6 = fetch('https://pokeapi.co/api/v2/pokemon/6').then(response => response.json());

        Promise.all([request2, request3, request4, request5, request6])
            .then(([data1, data2, data3, data4, data5]) => {
                setDetail([{ ...data1, pic: second }, { ...data2, pic: third }, { ...data3, pic: fourth }, { ...data4, pic: fifth }, { ...data5, pic: sixth }])
            })
            .catch(error => {
                console.log("ERROR IN PARALLEL FETCHING");
                console.error(error);
            });

    }

    const handleClick = (name) => {
        navigate(`/detail/${name}`)
    }

    useLayoutEffect(() => {

        if (detail) {

            const ctx1 = gsap.context(() => {

                let t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".card",
                        // markers: true,
                        start: "10% 10%",
                        end: "400% 10%",
                        scrub: 1,
                        pin: true,
                    }
                })
                    .to(".card", {
                        backgroundColor: 'black',
                    },'g')
                    .to(".card section", {
                        backgroundColor: 'white',
                    },'g')
                    .from(".card0", {
                        opacity: 0,
                        y: "30vh",
                    },'g')
                    .to(".card1", {
                        top: "14%",
                    })
                    .to(".card0", {
                        scale: .95,
                        boxShadow: "0 0 12px 8px black",
                    })
                    .to(".card2", {
                        top: "18%",
                    })
                    .to(".card1", {
                        scale: .96,
                        boxShadow: "0 0 12px 8px black",
                    })
                    .to(".card3", {
                        top: "22%",
                    })
                    .to(".card2", {
                        scale: .97,
                        boxShadow: "0 0 12px 8px black",
                    })
                    .to(".card4", {
                        top: "26%",
                        boxShadow: "0 0 12px 8px black",
                    })
                    .to(".card3", {
                        scale: .98,
                        boxShadow: "0 0 12px 8px black",
                    })

            }, parent)

            return () => ctx1.revert();

        }

    }, [detail])

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div ref={parent}>

            <div className='card' id='pokemon'>
                {
                    detail?.map((e, i) => (

                        <section key={e.id} className={`card${i}`} onClick={() => handleClick(e.name)}>

                            <div className='cardGrid1'>

                                <div><LazyLoadImage
                                    effect="blur"
                                    src={e.pic} /></div>

                                <h1>{e.name}</h1>

                            </div>

                            <div className='cardGrid2'>

                                <div className='moves'>
                                    {
                                        e?.moves.slice(0, 3).map((e, i) => (
                                            <span key={i}>
                                                <span>{e.move.name}</span>
                                            </span>
                                        ))
                                    }
                                </div>

                                <div className='cardRange'>
                                    {
                                        e?.stats.map((e, i) => (
                                            <div key={i} className='rangeHead'>
                                                <span>
                                                    <span>{e.stat.name}</span>
                                                    <span> : </span>
                                                    <span>{e.base_stat}</span>
                                                </span>
                                                <Range value={e.base_stat} />
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                        </section>

                    ))
                }

            </div>

        </div>
    )
}