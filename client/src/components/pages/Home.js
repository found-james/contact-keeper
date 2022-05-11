import React from "react";
import { Fragment } from "react";
import Contacts from "../contacts/Contacts";
export default function Home () {
    return (
        <Fragment>
            <div className="grid-2">
                <div>
                    {/* contact form */}
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </Fragment>
    );
};