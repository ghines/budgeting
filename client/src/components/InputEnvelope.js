import React, { Fragment, useState } from "react";

const InputEnvelope = () => {
  const [env_name, setDescription] = useState("");
  const [balance, setBalance] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { env_name, balance };
      const response = await fetch("http://localhost:4000/api/envelopes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.text(); 
      setResponseMsg(result || `Envelope ${env_name} added.`) 
    } catch (err) {
      console.error(err.message);
      setResponseMsg(`Error! Error! Danger! "${env_name}" probably not added.`);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Input Envelope</h1>
      <form className="d-flex flex-column" onSubmit={onSubmitForm}>
        <div className="mb-2">
          <input
            type="text"
            placeholder="add envelope"
            className="form-control"
            value={env_name}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            placeholder="Enter initial balance (in whole numbers, ie. 200"
            className="form-control"
            value={balance}
            onChange={(e) => setBalance(e.target.value)} // Update amount state
          />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
      {responseMsg && (
        <div className="mt-5 text center">
            <h3>{responseMsg}</h3>
        </div>
      )}
    </Fragment>
  );
};

export default InputEnvelope;
