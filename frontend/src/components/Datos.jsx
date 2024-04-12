import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Datos() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>API Data:</h1>
            <ul>
                {
                    Array.isArray(data) ? data.map(item => (
                        <li key={item.id}>
                            {item.nombre}
                        </li>
                    )) :
                        <li>No hay datos</li>
                }
            </ul>
        </div>
    );
}

export default Datos;
