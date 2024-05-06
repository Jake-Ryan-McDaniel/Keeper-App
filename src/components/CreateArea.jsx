import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  //This could've been set up with one const like this:
  // const [note, setNote] = useState({title: "", content: ""});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rows, setRows] = useState("1");
  const [inputSelected, setInputSelected] = useState(false);

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function handleClick() {
      setInputSelected(true);
      setRows("3");
  }

  return (
    <div>
      <form className="create-note"> {inputSelected ? 
        <input onChange={handleTitleChange} name="title" placeholder="Title" value={title}/> : null}
        <textarea onChange={handleContentChange} onClick={handleClick} name="content" placeholder="Take a note..." rows={rows} value={content}/>
        {inputSelected ?
        <Zoom in={true}>
        <Fab onClick={(event) => {
          event.preventDefault();
          props.onAdd(title, content);
          setTitle("");
          setContent("");
        }}><AddIcon/></Fab>
        </Zoom> : null}
      </form>
    </div>
  );
}

export default CreateArea;
