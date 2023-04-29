import React, {createContext, useEffect, useState} from "react";

export const CollectionWordsContext = createContext();

export const CollectionWords = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [dictionary, setDictionary] = useState([]);

useEffect(() => {
    setIsLoading(true);
    fetch('http://itgirlschool.justmakeit.ru/api/words')
    .then((Response) => Response.json())
    .then((data) => {
        setDictionary(data);
    })
    .catch((error) => {
        console.error('Error fetching words: ', error);
    })
    .finally(() => {setIsLoading(false);})

}, [])

    return(
        <CollectionWordsContext.Provider value={{dictionary, setDictionary, isLoading}}>
        {props.children}
        </CollectionWordsContext.Provider>
    )
}