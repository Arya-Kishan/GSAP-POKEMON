import React, { useEffect, useRef, useState } from 'react'
import './Detail.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Detail() {

  const { name } = useParams()
  const [data, setData] = useState(null)
  const [evolution1, setEvolution1] = useState(null)
  let about = useRef()
  let base = useRef()
  let evolution = useRef()
  let moves = useRef()

  const fetchData = async () => {

    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    setData(data)
  }

  const handleCategory = (name) => {
    console.log(name);
    let detailAbout = document.querySelector(".detailAbout")
    let detailBase = document.querySelector(".detailBase")
    let detailEvolution = document.querySelector(".detailEvolution")
    let detailMoves = document.querySelector(".detailMoves")

    if (name == 'detailAbout') {
      detailBase.style.display = 'none';
      detailEvolution.style.display = 'none';
      detailMoves.style.display = 'none';
      detailAbout.style.display = 'flex';
    }
    if (name == 'detailBase') {
      detailAbout.style.display = 'none';
      detailEvolution.style.display = 'none';
      detailMoves.style.display = 'none';
      detailBase.style.display = 'flex';
    }
    if (name == 'detailEvolution') {
      detailBase.style.display = 'none';
      detailAbout.style.display = 'none';
      detailMoves.style.display = 'none';
      detailEvolution.style.display = 'flex';
    }
    if (name == 'detailMoves') {
      detailBase.style.display = 'none';
      detailEvolution.style.display = 'none';
      detailAbout.style.display = 'none';
      detailMoves.style.display = 'flex';
    }
  }

  const handleEvolution = async () => {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    console.log(data);
    setEvolution1(data)
  }

  console.log(data);

  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    fetchData();

  }, [])

  return (
    <div className='pokDetail' style={{ backgroundColor: `#${randomColor}` }}>

      {
        data && (
          <>
            <section className='detailSec1' style={{ backgroundColor: `#${randomColor}` }}>

              <div className='detailBack'>
                <div><KeyboardBackspaceIcon /></div>
                <div><FavoriteBorderIcon /></div>
              </div>

              <div className='detailHead'>
                <h1>{data?.name}</h1>
                <span>#00{data?.id}</span>
              </div>

              <div className='detailTypes'>
                {
                  data?.types.map((e, i) => (
                    <div key={i}>
                      <span>{e.type.name}</span>
                    </div>
                  ))
                }
              </div>

              <div className='detailImg'><img src={data?.sprites.other.dream_world.front_default} alt="" /></div>


            </section>

            <section className='detailSec2'>

              <div className='detailCategory'>
                <h3 onClick={() => handleCategory('detailAbout')}>About</h3>
                <h3 onClick={() => handleCategory('detailBase')}>Base Stats</h3>
                <h3 onClick={() => {
                  handleCategory('detailEvolution')
                  handleEvolution()
                }}>Species</h3>
                <h3 onClick={() => handleCategory('detailMoves')}>Moves</h3>
              </div>

              <div className="detailAbout" ref={about}>
                <div><span>Height : </span><strong>{data.height}</strong></div>
                <div><span>weight : </span><strong>{data.weight}</strong></div>
                <div><span>Ability : </span><strong>{data?.abilities[0]?.ability.name}</strong></div>
                <div><span>Base Experience : </span><strong>{data.base_experience}</strong></div>
              </div>

              <div className="detailBase" ref={base}>

                {
                  data.stats.map((e, i) => (
                    <div key={i}>
                      <span>{e.stat.name} : </span><strong>{e.base_stat}</strong>
                    </div>
                  ))
                }

              </div>

              <div className="detailEvolution" ref={evolution}>
                {
                  evolution1 && (
                    <>
                    <div><span>Base Happiness : </span><strong>{evolution1.base_happiness}</strong></div>
                    <div><span>Capture Rate : </span><strong>{evolution1.capture_rate}</strong></div>
                    <div><span>Colou : r</span><strong>{evolution1.color.name}</strong></div>
                    <div><span>Generation : </span><strong>{evolution1.generation.name}</strong></div>
                    <div><span>Growth Rate : </span><strong>{evolution1.growth_rate.name}</strong></div>
                    <div><span>Habitat : </span><strong>{evolution1.habitat.name}</strong></div>
                    <div><span>Shape : </span><strong>{evolution1.shape.name}</strong></div>
                    <div><span>Egg Group : </span><strong>{evolution1.egg_groups.map((e,i)=>(<span key={i}>{e.name}</span>))}</strong></div>
                    </>
                  )
                }
              </div>

              <div className="detailMoves" ref={moves}>
                {
                  data.moves.map((e, i) => (
                    <div key={i}>
                      <span><span>{i + 1} </span><strong>{e.move.name}</strong></span>
                    </div>
                  ))
                }
              </div>

            </section>
          </>
        )
      }

    </div>
  )
}
