import React, { Fragment, useState, useEffect } from "react";
import EditEnvelope from "./EditEnvelope";


const ListEnvelopes = () => {
    const [envelopes, setEnvelopes] = useState([]);

    // named with underscore to prevent conflict with query deleteEnvelope
    async function delete_Envelope(env_name) {
        try {
            await fetch(`http://budgeting-npct.onrender.com/api/envelopes/${env_name}`, {
                method: "DELETE"
            });
            
            setEnvelopes(envelopes.filter(envelope => envelope.name !== env_name));
        } catch (err) {
            console.error(err.message); 
        }
    }

    async function getEnvelopes() {
        const response = await fetch("http://budgeting-npct.onrender.com/api/envelopes");
        const envArray = await response.json();
        //console.log(envArray);

        setEnvelopes(envArray);
    }

    useEffect(() => {
        getEnvelopes();
    }, []);

    return (
        <Fragment>
            {" "}
            <h2 className="text-center mt-5">List Envelopes </h2>
            <table class="table mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-end">Balance</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {envelopes.map(envelope => (
                        <tr key={envelope.id}>
                            <td>{envelope.name}</td>
                            <td className="text-end">$ {parseFloat(envelope.balance).toFixed(2)}</td>
                            <td><EditEnvelope envelope={envelope} /></td>
                            <td><button className="btn btn-danger" onClick={() => delete_Envelope(envelope.name)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default ListEnvelopes;