import { Fragment } from "react";

export default function About () {
    return (
        <Fragment>
            <h1>About This App</h1>
            <p className="my-1">
                This is a full stack React app for keeping contacts
            </p>
            <p className="bg-dark p">
                <strong>Version:</strong> 1.0.0
            </p>

        </Fragment>
    )
}