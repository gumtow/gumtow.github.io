const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Show extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title={portfolio.title}>
                <div className="row">
                    <h3>{portfolio.title}</h3>
                    <img className="img-fluid" src={portfolio.img} alt={portfolio.title}/>
                    <p>{portfolio.description}</p>

                </div>

            </Default>
            )
        }
    }
    
    // Export
    module.exports = Show;