import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class News extends Component {
   
    render() {
        return (
            <div>
               <h2>News page...</h2> 
               <Button color="primary" variant="contained">
                    Click Me
                </Button>

                <div className="input-group">
  <input className="form-control border-end-0 border rounded-pill" type="text" defaultValue="search" id="example-search-input" />
  <span className="input-group-append">
    <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
      <i className="fa fa-search" />
    </button>
  </span>
</div>
            

                <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
      
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />

            



            </div>
        )
    }
    
}

export default News;

