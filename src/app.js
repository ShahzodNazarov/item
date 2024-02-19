import React from "react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import uuid from "react-uuid";

export function App() {
  let [count, setCount] = useState([0]);
  let [check,setCheck]= useState(false);
  let [inp, setInp] = useState("");
  let [sum, setSum] = useState(0);
  let [item, setItem] = useState([
    {
      checked: false,
      name: "item 1",
      status: false,
    },
  ]);

  function plus(index) {
    count[index] += 1;
    setCount([...count]);
    let s = 0;
    for (let i = 0; i < count.length; i++) {
      s += Number(count[i]);
    }
    setSum(s);
  }

  function minus(index) {
    if (count[index] > 0) {
      count[index] -= 1;
      setCount([...count]);
      let s = 0;
      for (let i = 0; i < count.length; i++) {
        s += Number(count[i]);
      }
      setSum(s);
    }
  }

  function addItem(params) {
    let obj = {
      checked: false,
      name: inp,
    };
    item.push(obj);
    setItem([...item]);
    setInp("");
    setCount([...count, 0]);
  }

  function checkbox(index) {
    setCheck(!check);
    let s = [];
    for (let i = 0; i < item.length; i++) {
      if (i == index) {
        s.push({
          checked: check,
          name: item[i].name,
          status: true,
        });
      } else {
        s.push({
          checked: false,
          name: item[i].name,
          status: false,
        });
      }
    }
    setItem(s);
    console.log(s);
  }

  return (
    <div className="app">
      <div className="box">
        <div className="plus">
          <input
            type="text"
            placeholder="Add an item..."
            className="form-control"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />

          <button className="BiPlus" onClick={addItem}>
            <BiPlus />
          </button>
        </div>
        <div className="main">
          {item.map((item, index) => (
            <div className="item" key={uuid()}>
              <h4 className={item.checked ? "active" : ""}>
                <input
                  checked={item.checked}
                  type="checkbox"
                  id="inp1"
                  onChange={() => checkbox(index)}
                />{" "}
                {item.name}
              </h4>

              <div className="PandM">
                <button onClick={() => minus(index)}>
                  <FiChevronLeft />
                </button>

                <h5>{count[index]}</h5>

                <button onClick={() => plus(index)}>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <h3>total:{sum}</h3>
        </div>
      </div>
    </div>
  );
}
