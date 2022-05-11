import React from "react";
import { Fragment } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

export default function Home () {
    return (
        <Fragment>
            <div className="grid-2">
                <div>
                   <ContactForm />
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </Fragment>
    );
};