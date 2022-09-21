import React from 'react'
import { ForArchive, ForMain, ForSummary } from './items'

import taskUrl from '../assets/task.svg'
import ideaUrl from '../assets/idea.svg'
import randomThoughtUrl from '../assets/randomThought.svg'
import quoteUrl from '../assets//quote.svg'

interface ItemType {
    obj: {
        id: number,
        name: string,
        category: 'Task' | 'Idea' | 'Random Thought' | 'Quote',
        created?: string,
        content?: string,
        dates?: string[],
        active?: number,
        archived?: number
    },
    type: 'main' | 'summary' | 'archive'
}

const Item : React.FC<ItemType> = ({obj, type}) => {
    const imageUrl : string = obj.category === "Task" ? taskUrl :
                    obj.category === "Idea" ? ideaUrl :
                    obj.category === "Random Thought" ? randomThoughtUrl :
                    obj.category === "Quote" ? quoteUrl : false;


    if (type === 'main') return (<ForMain id={obj.id}
                                    imageUrl={imageUrl}
                                    name={obj.name}
                                    created={obj.created}
                                    category={obj.category}
                                    content={obj.content}
                                    dates={obj.dates}/>)
    if (type === 'summary') return (<ForSummary imageUrl={imageUrl}
                                    name={obj.category}
                                    active={obj.active}
                                    archived={obj.archived}/>)
    if (type === 'archive') return (<ForArchive id={obj.id}
                                    imageUrl={imageUrl}
                                    name={obj.name}
                                    created={obj.created}
                                    category={obj.category}
                                    content={obj.content}
                                    dates={obj.dates}/>)
}

export default Item