import React, { useState } from "react";

//styles
import { Wrapper, Content, TextIcon, CloseIcon} from './Form.styles'
type FormPropType = {
    trackId:string,
    onSubmit:Function
}

const Form = (props: FormPropType) => {
    //modal functionality of form 
    // console.log(typeof(props), "PROPS")
    const [formView, setFormView] = useState(false)
   
    
    //handling text inputs
    const[input, setInput]=useState({
        trackId: "",
        content: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement> ):void{
        const value = e.target.value
        const spotifyId = props.trackId
        setInput({
            content: value,
            trackId: spotifyId
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement> ): void {
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
            <textarea name='content' 
            // type='text'
            // rows ="7" cols="100"
                placeholder='Insert a description...' value={input.content} onChange={handleChange}/>
            <button type='submit' disabled={!input.content}>Create</button>
        </form>
        </Content> ) : null}
    </Wrapper>
    
)
};

export default Form