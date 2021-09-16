import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import Item from '../Item/Item';
// import { Button, FormControl, InputGroup } from 'react-bootstrap';
// import ItemList from "../ItemList/ItemList";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
    const [itemsSearched, setItemsSearched] = useState([]);

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
        setItemsSearched(items.filter(el => el.title.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    console.log(searchTerm)
    console.log(itemsSearched)

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.onSnapshot(querySnapshop => {
            setItems(querySnapshop.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() })
            }))
        })
    }, []);


    return (
        <>
            <input placeholder="Escribí el título del film" type="text" onChange={(evt) => handleChange(evt)} />
            {
                items.filter(val => {
                    if (searchTerm === "") {
                        return null
                    } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val
                    }
                }).map((val) => {
                    return <Item data={val} key={val.id} />
                })

            }
        </>
    );
}

export default SearchBar;