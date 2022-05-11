import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid"; 
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from "../types";

const ContactState = props => {
    const initialState = {
        contacts: [{
            id: 1,
            name: "James Steven",
            email: "some@email.com",
            phone: "111-111-1111",
            type: "professional"
        }, {
            id: 2,
            name: "James Steven II",
            email: "someOther@email.com",
            phone: "222-222-2222",
            type: "professional"
        }, {
            id: 3,
            name: "James Steven III",
            email: "someThird@email.com",
            phone: "333-333-3333",
            type: "professional"
        }],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    // actions: add, delete, set, clear, update, filter (contacts), clear filter

    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    const clearCurrent = contact => {
        dispatch({ type: CLEAR_CURRENT });
    }

    return (
        <ContactContext.Provider value={{ contacts: state.contacts, current: state.current, addContact, deleteContact, setCurrent, clearCurrent }}>
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;