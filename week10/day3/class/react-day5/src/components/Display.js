import React from 'react';
import ShowCounter from './ShowCounter';
import { createContext } from "react";

export const DisplayContext = createContext();

const Display = (props) => {
  return (
    <>
        <DisplayContext.Provider value={{ email: "aaa@gmail.com" }}>
            <ShowCounter />
        </DisplayContext.Provider>
      
    </>
  );
};

export default Display;
