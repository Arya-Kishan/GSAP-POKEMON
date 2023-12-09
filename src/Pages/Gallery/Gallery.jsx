import React, { useLayoutEffect, useRef } from 'react'
import './Gallery.scss'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'
import IMG7 from '../../assets/7.jpg'
import IMG8 from '../../assets/8.jpg'
import IMG9 from '../../assets/9.jpg'
import IMG10 from '../../assets/10.jpg'
import IMG11 from '../../assets/11.jpg'
import IMG12 from '../../assets/12.jpg'
import IMG13 from '../../assets/13.jpg'
import IMG14 from '../../assets/14.jpg'
import IMG15 from '../../assets/15.jpg'
import IMG16 from '../../assets/16.jpg'
import IMG17 from '../../assets/17.jpg'
import IMG18 from '../../assets/18.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Gallery() {

    gsap.registerPlugin(ScrollTrigger)
    const parent = useRef()

    useLayoutEffect(() => {

        const ctx1 = gsap.context(() => {

            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".gallery",
                    // markers: true,
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 1,
                }
            })
                .to("#gallery1", {
                    x: "-55%",
                }, 'a')
                .to("#gallery2", {
                    x: "55%",
                }, 'a')


        }, parent)

        return () => ctx1.revert();

    }, [])


    return (
        <div ref={parent}>
            <div className='gallery'>

                <section id='gallery1'>

                    <div>
                        <img src={IMG1} alt="" />
                        <img src={IMG2} alt="" />
                        <img src={IMG3} alt="" />
                        <img src={IMG4} alt="" />
                        <img src={IMG5} alt="" />
                        <img src={IMG6} alt="" />
                        <img src={IMG7} alt="" />
                        <img src={IMG8} alt="" />
                        <img src={IMG9} alt="" />
                        <img src={IMG1} alt="" />
                        <img src={IMG2} alt="" />
                        <img src={IMG3} alt="" />
                        <img src={IMG4} alt="" />
                        <img src={IMG5} alt="" />
                        <img src={IMG6} alt="" />
                        <img src={IMG7} alt="" />
                        <img src={IMG8} alt="" />
                        <img src={IMG9} alt="" />
                        <img src={IMG1} alt="" />
                        <img src={IMG2} alt="" />
                        <img src={IMG3} alt="" />
                        <img src={IMG4} alt="" />
                        <img src={IMG5} alt="" />
                        <img src={IMG6} alt="" />
                        <img src={IMG7} alt="" />
                        <img src={IMG8} alt="" />
                        <img src={IMG9} alt="" />
                    </div>


                </section>

                <section id='gallery2'>
                    <div>
                        <img src={IMG10} alt="" />
                        <img src={IMG11} alt="" />
                        <img src={IMG12} alt="" />
                        <img src={IMG13} alt="" />
                        <img src={IMG14} alt="" />
                        <img src={IMG15} alt="" />
                        <img src={IMG16} alt="" />
                        <img src={IMG17} alt="" />
                        <img src={IMG18} alt="" />
                        <img src={IMG10} alt="" />
                        <img src={IMG11} alt="" />
                        <img src={IMG12} alt="" />
                        <img src={IMG13} alt="" />
                        <img src={IMG14} alt="" />
                        <img src={IMG15} alt="" />
                        <img src={IMG16} alt="" />
                        <img src={IMG17} alt="" />
                        <img src={IMG18} alt="" />
                        <img src={IMG10} alt="" />
                        <img src={IMG11} alt="" />
                        <img src={IMG12} alt="" />
                        <img src={IMG13} alt="" />
                        <img src={IMG14} alt="" />
                        <img src={IMG15} alt="" />
                        <img src={IMG16} alt="" />
                        <img src={IMG17} alt="" />
                        <img src={IMG18} alt="" />
                    </div>
                </section>

            </div>
        </div>
    )
}