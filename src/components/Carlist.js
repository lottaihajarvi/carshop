import React from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

export default function Carlist() {

    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
        getCars();
    }, [])

    const getCars = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    }

    const colums = [
        {
            Header: 'Brand',
            accessor: 'brand'
        },
        {
            Header: 'Model',
            accessor: 'model'
        }
    ]

    return(
        <div>
            <ReactTable data={cars} colums={colums} />
        </div>
    );
}