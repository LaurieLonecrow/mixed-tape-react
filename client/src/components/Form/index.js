import React, { useState } from "react";

//components

//styles
import { Wrapper, Content, TextIcon, CloseIcon} from './Form.styles'


const Form = (props) => {
    //modal functionality of form 
    const [formView, setFormView] = useState(false)
   
    
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
        <TextIcon onClick={() => setFormView(!formView)}/>
        {formView ?
        (<Content>
        <form className='form-container'onSubmit={handleSubmit}>
          <CloseIcon onClick={() => setFormView(!formView)}/>
            <textarea type='textarea' name='content' rows="7" cols="100"
                placeholder='Insert a description...' value={input.content} onChange={handleChange}/>
            <button type='submit' disabled={!input.content}>Create</button>
        </form>
        </Content> ) : null}
    </Wrapper>
    
)
};

export default Form