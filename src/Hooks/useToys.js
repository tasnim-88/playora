import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToys = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('../toyData.json')
            .then(data => setData(data.data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))

    }, [])
    return { data, error, loading }
};

export default useToys;