import React ,{useState} from 'react';

export const Searchbar=(props)=>{
    const [text,setText]=useState("");
    const divCenter={
        display:'flex',
        justifyContent:'space-between',
        flexWrap:"wrap",
        with:"40vw",
        padding:"15px"
    };
    const fillStyle={
        backgroundColor:"#6c757d",
        color:"white",
        padding:"3px",
        width:'80px',
        margin:"5px",
        borderRadius:"2px",
        textAlign:'center',
        marginTop:"30px",
        cursor:"pointer",
    };
    const handleChange=(event)=>{
        setText(event.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.getImages(text);
    };
    const handleClick=(e)=>{
        props.getImages(e.target.innerHTML);
    };
    return(
        <div style={{textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} style={{width:"40vw",height:"34px",padding:"5px",outline:"none"}} type="text" value={text} placeholder='Search'/>&nbsp;
                <input type="submit" value="Find" className='btn btn-success'/>
            </form>
            <div style={divCenter}>
                <span style={fillStyle} onClick={handleClick}>Mountain</span>
                <span style={fillStyle} onClick={handleClick} >Beaches</span>
                <span style={fillStyle} onClick={handleClick} >Birds</span>
                <span style={fillStyle} onClick={handleClick} >Food</span>
            </div>
        </div>
    );
};