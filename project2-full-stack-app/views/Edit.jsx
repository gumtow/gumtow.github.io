const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Edit extends React.Component{
    render(){
        const {_id, title, img, show, description, tags, rating}= this.props.portfolio;
        return(
            <Default title={`Now editing ${title}`}>
                <div className="row">
                <div className="col-md-5 my-auto">
                        <form className="form-group" action={`/jgumtow/${_id}?_method=PUT`} method="POST">
                            Title: <input className="form-control" type="text" name="title" defaultValue={title} /><br/>
                            Image Location: <input className="form-control" type="text" name="img" defaultValue={img} /><br/>
                            Description: <input className="form-control" type="text" name="description" defaultValue={description} /><br/>
                            <div className="form-group form-check">
                                <input className="form-check-input" type="checkbox" name="show" checked={show}/>
                                <label className="form-check-label">Show this item: </label>
                            </div>
                            Tags: <input className="form-control" type="text" name="tags" defaultValue={tags} /><br/>
                            Rating: <input className="form-control" type="number" name="rating" defaultValue={rating} /><br/>
                            <br/>
                            <input className="btn btn-primary" type="submit" name="" value="Submit Edits"/>
                        </form>
                    </div>
                </div>

            </Default>
        )
    }
}

// Export
module.exports = Edit;