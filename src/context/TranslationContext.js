import React, {createContext} from "react";

// export const WordContext = createContext();

export const translation = {
english: {
    greeting: 'Hello',
    title: 'Contacts',
},
spenish: {
    greeting: 'Hola',
    title: 'Contactos',
},
}

export const TranslationContext = React.createContext();