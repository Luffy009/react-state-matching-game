import React from 'react'
import './TileSelector.css'
import useHover from '../../hooks'

const TileSelector = (props) => {
  const [ref, hovered] = useHover();

  const dropdown = (
    <div className='tileSelectorContent' >
      <div className='number'>4 onClick={() => { props.handleNumTileChange('number') }}</div>
      <div className='number'>16 onClick={() => { props.handleNumTileChange('number') }}</div>
      <div className='number'>36 onClick={() => { props.handleNumTileChange('number') }}</div>
    </div>
  )



  return (
    <div className='tileSelector'>
      <div>Number of Tiles</div>
      <div className='tileSelectorDropdown' ref={ref}>
        {props.numTiles}
        {dropdown}
        {hovered ? dropdown : null}
      </div>
    </div>
  )
}

export default TileSelector
