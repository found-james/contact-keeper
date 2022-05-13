
import { Fragment, useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../context/auth/authContext";

export default function Home () {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    },[]);
    
    return (
        <Fragment>
            <div className="grid-2">
                <div>
                   <ContactForm />
                </div>
                <div>
                    <ContactFilter />
                    <Contacts />
                </div>
            </div>
        </Fragment>
    );
};