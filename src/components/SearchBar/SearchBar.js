import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { getFirestore } from '../../firebase';
import Item from '../Item/Item';
import "../ItemListContainer/ItemListContainer.scss"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.onSnapshot(querySnapshop => {
            setItems(querySnapshop.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() })
            }))
        })
    }, []);

    const itemFilter = items.filter(el => {
        if (searchTerm === "") {
            return null
        }
        if (el.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return el
        }
        return false
    })

    return (
        <>
            <InputGroup onChange={(evt) => handleChange(evt)} size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Escribí el título del film</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            {
                searchTerm === "" ? null
                    : itemFilter.length > 0 ?
                        <div className="my-5 list-container">
                            {itemFilter.map(val => {
                                return <Item data={val} key={val.id} />
                            })
                            }
                        </div>
                        : <div className="d-flex justify-content-center my-5">No hay coincidencias</div>
            }
        </>
    );
}

export default SearchBar;