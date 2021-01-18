import React, {useRef} from 'react'
import {Bar} from './styles'

const searchB = ({text, data, update}) => {
    const original = data
    const refresh = e => {
        if (!e.value){
            update(original)
        }else{
            update(original.filter(el => el.includes(e.value)))
        }
    }
    return (
        <Bar type = "text" placeholder = {text} onChange={e => refresh(e.target)}></Bar>
)}
export default searchB