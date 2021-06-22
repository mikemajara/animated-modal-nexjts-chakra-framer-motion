import React from "react";
import { Item } from "./item";
import { items } from "@data/data";

export const HomePage = (props: any) => {
  return (
    <>
      {items.map((e, idx) => (
        <Item key={idx} id={e.id} />
      ))}
    </>
  );
};
