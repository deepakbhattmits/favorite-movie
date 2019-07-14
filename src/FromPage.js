import React from 'react';

const FormPage = ( props ) => {

    return (
      <div>
        <form className="ui form" onSubmit={ props.handleSubmit }>
  <div className="field">
    <label>Movie Name</label>
    <input type="text" name="movieName" placeholder="Movie Name" onChange={ props.handleChange } />
  </div>
  <div className="field">
    <label>Ratings</label>
    <input type="text" name="ratings" placeholder="Ratings"  onChange={ props.handleChange }/>
  </div>
  <div className="field">
    <label>Duration</label>
    <input type="text" name="duration" placeholder="Duration"  onChange={ props.handleChange }/>
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
      </div>
    );
}

export default FormPage;
