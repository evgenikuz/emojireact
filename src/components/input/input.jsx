import s from './input.module.css';
import React from 'react';

export function Input({ value, onChange}) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter keywords..."
            className={s.card__search}
        />
    );
}