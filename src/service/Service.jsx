import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rondomUser } from '../redux/rondomUser/RomdomUser';
import "./Service.css"

function Service() {
    const dispatch = useDispatch();
    const { country, loading, error } = useSelector((state) => state.rondom); 

    useEffect(() => {
        dispatch(rondomUser());
    }, [dispatch]);

    console.log(country);

    return (
        <div className="container">
        {loading && <p className="loading">Загрузка...</p>}
        {error && <p className="error">Ошибка: {error}</p>}
        <ul>
            {country && country.length > 0 ? (
                country.map((user, index) => (
                    <li key={index}>
                        {user.name.first} {user.name.last} - {user.location.country}
                        <img src={user.picture.thumbnail} alt="" />
                    </li>
                ))
            ) : (
                !loading && <p className="no-data">Данных нет</p>
            )}
        </ul>
    </div>
    );
}

export default Service;
