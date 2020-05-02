const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class New extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title="Create a new Portfolio Item">
                <div className="row">
                <div className="col-md-5 my-auto">
                        <form className="form-group" action="/jgumtow" method="POST">
                            Title: <input className="form-control" type="text" name="title" /><br/>
                            Image Location: <input className="form-control" type="text" name="img" /><br/>
                            <div className="form-group form-check">
                                <input className="form-check-input" type="checkbox" name="show" />
                                <label className="form-check-label">Show this item: </label>
                            </div>
                            <br/>
                            <input className="btn btn-primary" type="submit" name="" value="Create Fruit"/>
                        </form>
                    </div>
                </div>

            </Default>
        )
    }
}

// Export
module.exports = New;