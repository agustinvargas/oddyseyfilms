import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { getFirestore } from '../../firebase';
import Item from '../Item/Item';

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
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gridGap: "16px",
        justifyContent: "center"

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


    return (
        <>
            <InputGroup onChange={(evt) => handleChange(evt)} size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Escribí el título del film</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <div className="my-5" style={style}>
                {
                    items.filter(val => {
                        if (searchTerm === "") {
                            return null
                        }
                        if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return val
                        }
                        return false
                    })
                        .map(val => {
                            return <Item data={val} key={val.id} />
                        })
                }
            </div>
        </>
    );
}

export default SearchBar;