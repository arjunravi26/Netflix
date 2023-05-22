import axios from '../../axios'
import './Rowpost.css'
import React, { useEffect, useState } from 'react'
import { imageurl, APL_KEY } from '../../const/const';
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [rowMovie, setRowMovie] = useState()
  const [urlId, setUrlId] = useState()
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setRowMovie(response.data.results)
    })
  },);
  const opts = {
    height: '320',
    width: '100%',
    playerVars: {
      autoplay: 1
    },
  };
  const handleMovieClick = (id, index) => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results[index])

    })
    if (props.vid) {
      axios.get(`/movie/${id}/videos?api_key=${APL_KEY}&language=en-US`).then(response => {
        if (response.data.results !== 0) {
          setUrlId(response.data.results[0])
          console.log(response.data)

        } else {
          alert("Video Not Available")
        }
      })
    }
    else if (props.ser) {
      axios.get(`/tv/${id}/season/1/videos?api_key=${APL_KEY}&language=en-US`).then(response => {
        if (response.data.results !== 0) {
          setUrlId(response.data.results[0])
          console.log(response.data.results[0])

        }

      })

    }
  }
  const clear = () => {
    setUrlId('')
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          rowMovie ? rowMovie.map((obj, index) =>
            
              <img onClick={() => handleMovieClick(obj.id, index)} className='poster' src={`${obj ? imageurl + obj.poster_path : " "}`} alt="none" />

           

          ) : null
        }
      </div>
      {urlId && <div><span class="close-button" onClick={clear}>&times;</span>
        <Youtube opts={opts} videoId={urlId.key}></Youtube>
      </div>
      }

    </div>
  )
}

export default Rowpost
