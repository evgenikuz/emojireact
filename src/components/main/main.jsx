import './main.css'
import {Card} from '../card/card'
import {data} from './data'
import React, { useEffect, useState } from 'react'
import { Input } from '../input/input'
import { Pagination } from '../pagination/pagination'

export const Main = () => {
    let [noText, searchText] = useState('')
    let noTextTrimmed = noText.trim();

    //пагинация
    const [filteredData, setFilteredData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [emojiPerPage, setEmojiPerPage] = useState(12)

    useEffect(() => {
        const filteredData = data.filter(el => el.title.toLowerCase().includes(noTextTrimmed) || el.keywords.toLowerCase().includes(noTextTrimmed))
        setFilteredData(filteredData)
        setCurrentPage(1)
    }, [noTextTrimmed, emojiPerPage])
     // Определение индексов первого и последнего эмодзи на странице
     const lastEmojiIndex = currentPage * emojiPerPage; //последний эмодзи на странице
     const firstEmojiIndex = lastEmojiIndex - emojiPerPage; //первый эмодзи на странице
 
     // Получение текущей страницы эмодзи
     const currentEmoji = filteredData.slice(firstEmojiIndex, lastEmojiIndex);

     const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
     }

     const handlePerPageChange = (perPage) => {
        setEmojiPerPage(perPage)
     }
	return (
        <div className="card__section">
        <div className="card__input">
            <Input value={noText} onChange={(event) => searchText(event.target.value.toLowerCase())}/>
            {/* <input className="card__search" type="text" placeholder="Placeholder" value={noText}
             onChange={(event) => searchText(event.target.value.toLowerCase())}/> */}
        </div>
        <div className="card__container">
            {currentEmoji
            // .filter(el => el.title.toLowerCase().includes(noTextTrimmed) || el.keywords.toLowerCase().includes(noTextTrimmed))
            .map((el, index) => (<Card id={index} symbol={el.symbol} title={el.title} keywords={el.keywords = [...new Set(el.keywords.split(' '))].join(' ')} />))}
        </div>
        <Pagination 
            EmojiPerPage={emojiPerPage}
            totalEmoji = {filteredData.length}
            paginate={paginate}
            currentPage={currentPage}
            handlePerPageChange={handlePerPageChange}
        />
    </div> 
)
}