import React, { useState } from "react";

//components

const Form = (props) => {
    const[input, setInput]=useState({
        trackId: "",
        content: ""
    });

    function handleChange(e){
        const value = e.target.value
        setInput({
            ...input,
            [e.target.name]:value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(input);
        setInput({trackId: '', content:''});
    }

return (
    <div>
        <form value={`${props.trackId}`} name='trackId' className='form-container'onSubmit={handleSubmit}>
            <textarea type='text' name='content' rows="7" cols="100"
                placeholder='Insert a description...' value={input.content} onChange={handleChange}/>
            <button type='submit' disabled={!input.content}>Create</button>
        </form>
        </div>
    
)
};

export default Form