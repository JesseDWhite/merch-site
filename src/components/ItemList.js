import React from "react";
import Item from "./Item";

const masterItemList = [
  {
    name: "cloudbuster",
    description: "I know that something good is going to happen",
    quantity: 1
  },
  {
    name: "batwings",
    description: "Move with me",
    quantity: 100
  },
  {
    name: "dagger",
    description: "Sign the letter, I'm all yours",
    quantity: 60
  },
  {
    name: "headpiece",
    description: "Babooshka",
    quantity: 5
  },
  {
    name: "key",
    description: "Pull out the pin",
    quantity: 50
  },
  {
    name: "book",
    description: "So cold, don't let me go",
    quantity: 10
  }
]

function ItemList() {
  return (
    <React.Fragment>
      <hr />
      {masterItemList.map((item, index) =>
        <Item name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default ItemList;

