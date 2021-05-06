import React, { useState } from "react";
import s from "./Page.module.scss";

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const initialState = {
  amount: "",
  email: "",
  type: "Individual Account ",
  date: "",
  id: "",
};

const initialData = [
  {
    amount: 100,
    email: "cdc@gmail.com",
    type: "Joint Account",
    date: "06.05.2021",
    id: 1,
  },
  {
    amount: 200,
    email: "cdc@gmail.com",
    type: "Individual Account",
    date: "06.05.2021",
    id: 2,
  },
];

const Page = () => {
  const [isActive, setActive] = useState(false);
  const [state, setState] = useState({ ...initialState });
  const [data, setData] = useState([...initialData]);
  const [transactionsNumber, setTransactionsNumber] = useState(0);

  let onHandleFormChange = (e) => {
    let date = new Date().toLocaleString("Uk-uk", options);
    e.target.name === "amount" &&
      setState({
        ...state,
        [e.target.name]: e.target.value,
        date: date,
        id: Date.now(),
      });
    e.target.name === "email" &&
      setState({
        ...state,
        [e.target.name]: e.target.value,
        date: date,
        id: Date.now(),
      });
    e.target.name === "type" &&
      setState({
        ...state,
        [e.target.name]: e.target.value,
        date: date,
        id: Date.now(),
      });
  };

  let onSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [state, ...prev]);
    setState({ ...initialState });
  };

  return (
    <div className={s.container}>
      <h1>DEPOSITS</h1>
      <div className={s.panel_wraper}>
        <div className={s.inputSection}>
          <span
            className={isActive ? null : `${s.activeBookmark}`}
            onClick={() => setActive(!isActive)}
          >
            CHECK
          </span>
          <span
            className={isActive ? `${s.activeBookmark}` : null}
            onClick={() => setActive(!isActive)}
          >
            WIRE TRANSFER
          </span>
          {isActive ? (
            <h2 className={s.balance}>Welcome!</h2>
          ) : (
            <form onSubmit={onSubmit}>
              <label className={s.formLabel}>Amount</label>
              <label className={s.formLabel}>E-mail</label>
              <input
                type="number"
                className={s.formInput}
                placeholder="1000"
                max={10000}
                name="amount"
                value={state.amount}
                onChange={onHandleFormChange}
                required
              ></input>
              <input
                className={s.formInput}
                type="email"
                placeholder="E-mail"
                name="email"
                value={state.email}
                onChange={onHandleFormChange}
                required
              ></input>

              <label className={s.labelCheckBox}>
                <input
                className={s.radiobutton}
                  type="radio"
                    name="type"
                    width="16px"
                  value="Individual Account"
                    onChange={onHandleFormChange}
                    checked
                  required
                />
                Individual Account 
              </label>
              <label className={s.labelCheckBox}>
                <input
                className={s.radiobutton}
                  type="radio"
                  name="type"
                  value="Joint Account"
                  onChange={onHandleFormChange}
                  required
                />
                Joint Account 
              </label>
              <button type="submit">Next</button>
            </form>
          )}
        </div>
        <div className={s.transactionListSection}>
          <div>
            <table >
            <tbody>
              <tr className={s.table_text}>
                <th>Date</th>
                <th>Type</th>
                <th width="40">Amount</th>
              </tr>

              {data.map((item, numberOfTransactions) => {
                if (numberOfTransactions < 6) {
                  return (
                    <tr className={s.tr } key={item.id}>
                      <td className={s.firstColumn}>{item.date}</td>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
           </div>
          <div className={s.buttonContainer}>
            <button className={s.buttonControl}>
              
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "0 15px 0 0",
                }}
              >
                <path
                  d="M7.41003 10.59L2.83003 6L7.41003 1.41L6.00003 0L3.52859e-05 6L6.00003 12L7.41003 10.59Z"
                  fill="#989EB8"
                />
              </svg>
              Prev
            </button>
            <button
              onClick={() => setTransactionsNumber(transactionsNumber + 6)}
              className={s.buttonControl}
            >
              Next
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "0 0 0 15px",
                }}
              >
                <path
                  d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99996 6L1.99997 12L0.589966 10.59Z"
                  fill="#989EB8"
                />
              </svg>
            </button>
            <button className={s.buttonControl}>Last</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;