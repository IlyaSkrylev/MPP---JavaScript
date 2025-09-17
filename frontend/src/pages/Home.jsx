import React from 'react';
import { formatDate, getCurrentDate } from '../utils/dateUtils';

export default function Home() {
    const date = getCurrentDate()
    const formattedDate = formatDate(date)

    return <div>
        <h1>Главная</h1>
        <p>Дата: {formattedDate}</p>
    </div>;
}
