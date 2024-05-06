import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(title, content) {
    setItems(prevItems => {
      return [...prevItems, {title, content}];
    });
    console.log(items);
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} items={items}/>
      {items.map((item, index) => (
      <Note key={1} id={index} onChecked={deleteItem} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
