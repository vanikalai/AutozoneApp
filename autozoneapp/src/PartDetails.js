import React, { Components } from 'react';
import axios from 'axios';
const partdetails = function(props){
    return (<div class="Autoparts">
        <p><label>Category</label>:<input value={props.name} onChange={props.changeNameHandler} /></p>
        <p><label>Sub-Category</label>:{props.date_of_birth}</p>
        <p><label>Partname</label>:<input value={props.position} onChange={props.changePositionHandler} /></p>
        <p><label>Description</label>:</p>
        <p><Button variant="danger" onClick={props.deleteHandler}> Delete </Button>  </p>
    </div>);
};

// exporting the component
export default partdetails;