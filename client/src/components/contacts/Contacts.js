import { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../context/contact/contactContext";

function Contacts() {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;


    useEffect(() => { 
         getContacts();
        
    },[]);

    // if (contacts !== null && contacts.length === 0 && !loading) {
    //     return (<h4>Please add contact</h4>);
    // }

    const filteredMap = contact => (
        <CSSTransition key={contact._id} timeout={500} classNames="item">
            <ContactItem contact={contact} />
        </CSSTransition>
    )

    const contactsMap = contact => (
        <CSSTransition key={contact._id} timeout={500} classNames="item">
            <ContactItem contact={ contact } />
        </CSSTransition>
    )


  return (
      <Fragment>
          <TransitionGroup>
            { 
            filtered !== null ? filtered.map(filteredMap) : contacts && contacts.map(contactsMap)
            }
          </TransitionGroup>
      </Fragment>
  )
}

export default Contacts;