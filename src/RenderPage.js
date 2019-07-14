import React from 'react';

const RenderPage = ( props ) => {
   const renderData = ( ) => {
  
    if( props.data.length === 0 ) {
      return false;
    }
    return props.data.map((el,i) => {
      return (
          <tr key={ i }>
            <td>{ el.movieName }</td>
            <td>{ el.ratings }</td>
            <td>{ el.duration }</td>
          </tr>
          );
        });
    }
    
    return (
      
      <div>
        <table className="ui single line table">
            <thead>
                  <tr>
                    <th>Movie Name</th>
                    <th>Ratings</th>
                    <th>Duration</th>
                  </tr>
            </thead>
            <tbody>
                { renderData() }
            </tbody>
          </table>
      </div>
    );
}

export default RenderPage;
