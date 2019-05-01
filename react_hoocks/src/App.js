import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo
} from "react";
import { useTitleInput } from "./hooks/useTitleInput";
import Toggle from "./Toggle";
import Counter from "./Counter";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = word => {
    return word
      .split("")
      .reverse()
      .join("");
  };

  const Titlereversed = useMemo(() => reverseWord(name), [name]);
  // useEffect(() => {
  //   document.title = name;
  // });

  return (
    <UserContext.Provider value={{ user: true }}>
      <div className="main-wrapper" ref={ref}>
        <h1 onMouseEnter={() => console.log(ref.current.className)}>
          Level Up Dishes
        </h1>
        <p>This is name {name}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            formSubmit(name, setName);
          }}
        >
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
          <Toggle />
          <Counter />
        </form>
      </div>
    </UserContext.Provider>
  );
};

const formSubmit = (value, setValue) => {
  console.log("email.sent to " + value);
  setValue("");
};

export default App;
