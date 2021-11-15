import React, { useState } from "react";

//components
import Playlist from "../Playlist";

//styles
import { Wrapper, Content, Chat} from './Form.styles'


const Form = (props) => {
    //modal functionality of form 
    const [formView, setFormView] = useState(false)
    
    function showForm(e){
        setFormView(true)
    }
    
    //handling text inputs
    const[input, setInput]=useState({
        trackId: "",
        content: ""
    });

    function handleChange(e){
        const value = e.target.value
        const spotifyId = props.trackId
        setInput({
            content: value,
            trackId: spotifyId
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(input);
        setInput({trackId:'', content:''});
        setFormView(false);
    }

return (
    <Wrapper>
        <Chat onClick={showForm}/>
        {formView ?
        (<Content>
        <form className='form-container'onSubmit={handleSubmit}>
            <textarea type='textarea' name='content' rows="7" cols="100"
                placeholder='Insert a description...' value={input.content} onChange={handleChange}/>
            <button type='submit' disabled={!input.content}>Create</button>
        </form>
        </Content> ) : null}
    </Wrapper>
    
)
};

export default Form