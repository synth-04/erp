// src/components/CustomerList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fai una richiesta GET all'endpoint di Django per i clienti
        axios.get('http://127.0.0.1:8000/api/customers/')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("C'è stato un errore nel recupero dei dati!", error);
            });
    }, []);

    return (
        <div>
            <h2>Elenco Clienti</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
