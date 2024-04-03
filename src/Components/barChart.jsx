import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';



function CustomChart({readBooks}) {
    const data = [];
    readBooks.map(
        book => {
            const value = {
                name:book.bookName,
                pages:book.totalPages,
            }
            data.push(value);
        }
    )

    return (
        <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="pages" fill="#8884d8" barSize={30} />
        </BarChart>

    );
}

export default CustomChart;
