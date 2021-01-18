import React , {useState} from 'react'
import { Bar, FancyButton } from './styles'

const UpdateList = ({list, addList}) => {
    const [input, setInput] = useState('')
    return (
    <div>
        <Bar type='text' placeholder='update list' onChange={
            e => setInput(e.target.value)
        }>
        </Bar>
        <FancyButton type='submit' onClick={() =>addList(list.concat([input]))}>Update!</FancyButton>
    </div>

)}
export default UpdateList