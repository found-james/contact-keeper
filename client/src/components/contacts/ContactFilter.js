
import { useContext, useEffect, useRef } from "react";
import ContactContext from "../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext( ContactContext );
  const text = useRef("");

  const {filterContacts, clearFilter, filtered } = contactContext;

  const onChange = e => {
    if(text.current.value !== ""){
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  }

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  })

  return (
    <form>
      <input ref={ text } type="text" placeholder="Filter Contacts" onChange={ onChange } />

    </form>
  )
}

export default ContactFilter;