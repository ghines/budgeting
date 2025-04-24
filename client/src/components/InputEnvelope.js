import React, { Fragment, useState } from "react";

const InputEnvelope = () => {
  const [env_name, setDescription] = useState("");
  const [balance, setBalance] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { env_name, balance };
      const response = await fetch("https://budgeting-npct.onrender.com/api/envelopes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.text(); 
      setResponseMsg(result || `Envelope ${env_name} added.`)
      //window.location = '/'; 
    } catch (err) {
      console.error(err.message);
      setResponseMsg(`Error! Error! Danger! "${env_name}" probably not added.`);
    }
  };

  return (
    <Fragment>
      <h3 className="mt-5">Add New Envelope</h3>
      <form className="d-flex flex-column" onSubmit={onSubmitForm}>
        <div className="mb-2">
          <input
            type="text"
            placeholder="new envelope name"
            className="form-control"
            value={env_name}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-2 d-flex align-items-center">
          <input
            type="number"
            placeholder="Enter initial balance (in whole numbers, ie. 200"
            className="form-control me-2"
            value={balance}
            onChange={(e) => setBalance(e.target.value)} // Update amount state
          />
          <button className="ml-5 btn btn-success w-50">Add</button>
        </div>
        
      </form>
      {responseMsg && (
        <div className="mt-5 text center">
            <h4>{responseMsg}</h4>
        </div>
      )}
    </Fragment>
  );
};

export default InputEnvelope;
