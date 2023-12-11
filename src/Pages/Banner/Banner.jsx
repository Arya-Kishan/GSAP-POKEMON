import React, { useLayoutEffect, useRef } from 'react'
import './Banner.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pikachu from '../../assets/pikachu.png'
import ball from '../../assets/ball.png'
import { useNavigate } from 'react-router-dom'
import light2 from '../../assets/light2.avif'

export default function Banner() {

    gsap.registerPlugin(ScrollTrigger)
    const parent = useRef()
    const navigate = useNavigate()

    useLayoutEffect(() => {

        const ctx1 = gsap.context(() => {

            let t1 = gsap.timeline()
                .from("#bannerhead1", {
                    x: "-250%",
                    duration: .5,
                }, 'a')
                .from("#bannerImg1", {
                    x: "-250%",
                    duration: .5,
                }, 'a')
                .from("i", {
                    x: "350%",
                    duration: .5,
                }, 'a')
                .from("#bannerImg2", {
                    rotateY: "360deg",
                    y: "-120vh",
                    x: "100vw",
                    duration: 1,
                }, 'b')
                .from("#bannerhead2", {
                    rotateX: "720deg",
                    y: "120vh",
                    x: "100vw",
                    duration: 1,
                }, 'b')
                .from("#bannerBtn", {
                    x: "-100vw",
                    duration: .5,
                }, 'a')
                .from("#icon", {
                    x: "100vw",
                    duration: .5,
                }, 'a')
                .to("#bannerImg2", {
                    scale: 1.1,
                })
                .to("#bannerImg2", {
                    scale: 1,
                    filter: "drop-shadow(0 0 15px black)",
                })

        }, parent)

        return () => ctx1.revert();

    }, [])

    const handleLight = () => {
        console.log("hii");

        const ctx2 = gsap.context(() => {

            let tl = gsap.timeline()
                .to(".banner", {
                    opacity: 0,
                    duration: 1,
                })
                .to("#light", {
                    display:"flex",
                })
                .to("#light", {
                    display:"none",
                })
                .to(".banner", {
                    opacity: 1,
                    duration: 1,
                })

        }, parent)

        return () => ctx2.revert()

    }


    return (
        <div ref={parent}>
            <div className='banner'>

                <i><a href="#pokemon">P</a></i>

                <h1 id='bannerhead2'>PIKACHU</h1>
                <img id='bannerImg2' src={pikachu} alt="" srcSet="" />

                <div id="logo">
                    <img id='bannerImg1' src={ball} alt="" srcSet="" />
                    <h2 id='bannerhead1'>POKEMON</h2>
                </div>

                <div id='bannerBtn'>
                    <button id='bannerBtn1' onClick={() => navigate('/more')}>MORE</button>
                    <button id='bannerBtn2' onClick={handleLight}>SHOCK</button>
                </div>

                <div id="icon">
                    When it smashes its opponents with its bolt-shaped tail, it delivers a surge of electricity equivalent to a lightning strike. Its Gigantamax power expanded, forming its supersized body and towering tail.
                </div>

                <section id='bannerSec1'>
                    <h1>POKEMON</h1>
                    <p>Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers. The franchise's target audience is children aged 5 to 12, but it is known to attract people of all ages.The franchise originated as a pair of role-playing games developed by Game Freak, following an original concept by its founder, Satoshi Tajiri. Released on the Game Boy on February 27, 1996, the games became sleeper hits and were followed by manga series, a trading card game, and anime series and films. From 1998 to 2000, Pokémon was exported to the rest of the world, creating an unprecedented global phenomenon dubbed "Pokémania". By 2002, the craze had ended, after which Pokémon became a fixture in popular culture, with new products being released to this day. In the summer of 2016, the franchise spawned a second craze with the release of Pokémon Go, an augmented reality game developed by Niantic. Pokémon has since been estimated to be the world's highest-grossing media franchise and one of the best-selling video game franchises.<br />The Pokémon anime series was largely credited for allowing anime to become more popular and familiar around the world, especially in the United States and Asia, where many Pokémon films are among the highest-grossing anime films. It is also considered to be one of the first anime series on television to reach this level of mainstream success with Western and Asian audiences, as well as being credited with allowing the game series to reach such a degree of popularity and vice versa. Pokémon is regarded as the most successful video game adaptation of all time, with over 1,200 episodes broadcast and adapted for international television markets, concurrently airing in 192 countries worldwide and one of the most widely watched shows on Netflix, as of 2016</p>
                </section>

            </div>
            <img id='light' src={light2} alt="" srcset="" />
        </div>
    )
}
