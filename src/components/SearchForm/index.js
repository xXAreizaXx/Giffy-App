import React from 'react';
import { useLocation } from "wouter"
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
    const [_, pushLocation] = useLocation()
    const { keyword , times , rating , updateKeyword , updateRating } = useForm({ initialKeyword , initialRating })

    const handleChange = evt => {
        updateKeyword(evt.target.value)
    }

    const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
            <select onChange={handleChangeRating} value={rating}>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <small>{times}</small>
        </form>
    )
}

