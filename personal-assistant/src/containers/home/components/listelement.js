import React from 'react'


const ListElement = ({description, data, update}) => (
    <li>
        <p>{description}<button type="submit"onClick={() => update(data.filter(el => el!=description))}>delete</button></p>
        
    </li>
)
export const testList = ['uhhh', 'something else', 'oh boy']
export const TaskList = ({data, update}) => (
    <ul>
        <lh>THINGS TO DO</lh>
        {data.map((str) =>
            <ListElement description={str} data={data} update={update}/>)}
    </ul>
)
