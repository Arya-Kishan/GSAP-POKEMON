import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Horizontal.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import IMG11 from '../../assets/11.jpg'
import IMG12 from '../../assets/12.jpg'
import IMG13 from '../../assets/13.jpg'
import IMG14 from '../../assets/14.jpg'
import IMG15 from '../../assets/15.jpg'
import Range from '../../components/Range'

export default function Horizontal() {

    gsap.registerPlugin(ScrollTrigger)
    const parent = useRef()
    const [detail, setDetail] = useState(null)

    const fetchData = async () => {

        const request1 = fetch('https://pokeapi.co/api/v2/pokemon/11').then(response => response.json());
        const request2 = fetch('https://pokeapi.co/api/v2/pokemon/12').then(response => response.json());
        const request3 = fetch('https://pokeapi.co/api/v2/pokemon/13').then(response => response.json());
        const request4 = fetch('https://pokeapi.co/api/v2/pokemon/14').then(response => response.json());
        const request5 = fetch('https://pokeapi.co/api/v2/pokemon/15').then(response => response.json());

        Promise.all([request1, request2, request3, request4, request5])
            .then(([data1, data2, data3, data4, data5]) => {
                setDetail([{ ...data1, pic: IMG11 }, { ...data2, pic: IMG12 }, { ...data3, pic: IMG13 }, { ...data4, pic: IMG14 }, { ...data5, pic: IMG15 }])
            })
            .catch(error => {
                console.log("ERROR IN PARALLEL FETCHING");
                console.error(error);
            });

    }
    console.log(detail);

    useLayoutEffect(() => {

        if (detail) {
            const ctx1 = gsap.context(() => {

                let t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".Horizontal",
                        // markers: true,
                        start: "10% 10%",
                        end: "100% 10%",
                        scrub: 1,
                        pin: true,
                    }
                })
                    .to("#horH1", {
                        opacity: 0,
                    })
                    .to("#horHead0", {
                        top: "10%",
                        left: "50%",
                    }, 'a')
                    .to("#horImg0", {
                        top: "50%",
                        left: "50%",
                    }, 'a')
                    .to("#horFeature10", {
                        bottom: "-8%",
                        left: "20%",
                    }, 'a')
                    .to("#horFeature20", {
                        right: "-6%",
                    }, 'a')
                    .to("#HorizontalSec0", {
                        x: "-50%",
                    }, 'b')




                    .to("#HorizontalSec0", {
                        x: "-100%",
                    }, 'c')
                    .to("#horHead1", {
                        top: "10%",
                        left: "50%",
                    }, 'c')
                    .to("#horImg1", {
                        top: "50%",
                        left: "50%",
                    }, 'c')
                    .to("#horFeature11", {
                        bottom: "-8%",
                        left: "20%",
                    }, 'c')
                    .to("#horFeature21", {
                        right: "-6%",
                    }, 'c')
                    .to("#HorizontalSec1", {
                        x: "-50%",
                    }, 'd')





                    .to("#HorizontalSec1", {
                        x: "-100%",
                    }, 'e')
                    .to("#horHead2", {
                        top: "10%",
                        left: "50%",
                    }, 'e')
                    .to("#horImg2", {
                        top: "50%",
                        left: "50%",
                    }, 'e')
                    .to("#horFeature12", {
                        bottom: "-8%",
                        left: "20%",
                    }, 'e')
                    .to("#horFeature22", {
                        right: "-6%",
                    }, 'e')
                    .to("#HorizontalSec2", {
                        x: "-50%",
                    }, 'f')





                    .to("#HorizontalSec2", {
                        x: "-100%",
                    }, 'g')
                    .to("#horHead3", {
                        top: "10%",
                        left: "50%",
                    }, 'g')
                    .to("#horImg3", {
                        top: "50%",
                        left: "50%",
                    }, 'g')
                    .to("#horFeature13", {
                        bottom: "-8%",
                        left: "20%",
                    }, 'g')
                    .to("#horFeature23", {
                        right: "-6%",
                    }, 'g')
                    .to("#HorizontalSec3", {
                        x: "-50%",
                    }, 'h')





                    .to("#HorizontalSec3", {
                        x: "-100%",
                    }, 'i')
                    .to("#horHead4", {
                        top: "10%",
                        left: "50%",
                    }, 'i')
                    .to("#horImg4", {
                        top: "50%",
                        left: "50%",
                    }, 'i')
                    .to("#horFeature14", {
                        bottom: "-8%",
                        left: "20%",
                    }, 'i')
                    .to("#horFeature24", {
                        right: "-6%",
                    }, 'i')

            }, parent)

            return () => ctx1.revert();

        }

    }, [detail])

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div ref={parent}>
            <div className='Horizontal'>
                <h1 id='horH1'>POKEMON</h1>
                {
                    detail?.slice(0, 5).map((e, i) => (

                        <section key={e.id} id={`HorizontalSec${i}`}>

                            <h1 id={`horHead${i}`}>{e.name}</h1>

                            <div><img id={`horImg${i}`} src={e.pic} alt="" /></div>

                            <div className='HorizontalFeature1' id={`horFeature1${i}`}>
                                {
                                    e?.moves.slice(0, 4).map((e, i) => (
                                        <span key={i}>
                                            <span>{e.move.name}</span>
                                        </span>
                                    ))
                                }
                            </div>

                            <div className='HorizontalFeature2' id={`horFeature2${i}`}>
                                {
                                    e?.stats.map((e, i) => (
                                        <div key={i}>
                                            <div>
                                                <span>{e.stat.name}</span>
                                                <span> : </span>
                                                <span>{e.base_stat}</span>
                                            </div>
                                            <Range value={e.base_stat} />
                                        </div>
                                    ))
                                }
                            </div>

                        </section>

                    ))
                }

            </div>
        </div>
    )
}
