import React, { Fragment, useState } from "react";

const EditEnvelope = ({ envelope }) => {
    
    const editName = async name => {
        try {
            //console.log(`name is ${name} -- Envelope name is ${envelope.name}`);
            const body = {name};

            await fetch(`https://budgeting-npct.onrender.com/api/envelopes/${envelope.name}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            //console.log(response)

            window.location = "/"; //so we don't have to refresh window
    } catch (err) {
        console.error(err.message);
    }
};

    const [name, setName] = useState(envelope.name);
    return <Fragment>
        <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target={`#${envelope.name}`}
        >
            Edit
        </button>

        <div class="modal" id={`${envelope.name}`} onClick = {() => setName(envelope.name)}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Envelope</h4>
                        <button type="button" class="close"
                        data-dismiss="modal"
                        onClick = {() => setName(envelope.name)}
                        >
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className="form-control"
                            value={name} onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal"
                            onClick={() => editName(name)}
                        >
                            Edit
                        </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal"
                        onClick = {() => setName(envelope.name)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
}

export default EditEnvelope;