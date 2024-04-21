import s from './pagination.module.css'
import React from 'react'

export const Pagination = ({EmojiPerPage, totalEmoji, paginate, currentPage, handlePerPageChange}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalEmoji / EmojiPerPage);
    
    //красивая пагинация
    let startPage, endPage;
    if (totalPages <= 5) {
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage <= 2) {
        startPage = 1;
        endPage = 5;
    } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 4;
        endPage = totalPages;
    } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
    }
    // формируем массив страниц для отображения
    for(let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
    }
    // переход между страницами
    const handleClick = (event, number) => {
        event.preventDefault()
        paginate(number) // вызываем функцию пагинации
    }
    return <div className={s.paginationWrapper}>
        <ul className={s.pagination}>
            <li className={`${s.pageItem} ${currentPage === 1 ? s.disabled : ''}`}>
                <a href="#!" className={s.pageLink} onClick={(event) => handleClick(event, 1)}>First</a>
            </li>
            {pageNumbers.map((number) => (
                <li className={`${s.pageItem} ${currentPage === number ? s.active : ''}`}>
                <a href="#!" className={s.pageLink} onClick={(event) => handleClick(event, number)}>{number}</a>
            </li>
            ))}
            <li className={`${s.pageItem} ${currentPage === totalPages ? s.disabled : ''}`}>
                <a href="#!" className={s.pageLink} onClick={(event) => handleClick(event, totalPages)}>Last</a>
            </li>
        </ul>
        <div className={s.paginationControls}>
        <p className={s.paginationControlsDescr}>Per page</p>
                <select className={s.emojiPerPageSelect} onChange={(event) => handlePerPageChange(event.target.value)} defaultValue={EmojiPerPage}>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="42">42</option>
                    <option value="100">100</option>
                </select>
        </div>
    </div>
    }