const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Show extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title={portfolio.title}>
                <nav>
                        <a className="btn btn-primary" href="/jgumtow">Home</a>
                    </nav>
                <div>
                    <h3>{portfolio.title}</h3>
                    <img className="img-fluid" src={portfolio.img} alt={portfolio.title}/>
                    <p>Description: {portfolio.description}</p>
                    <p>{portfolio.show?`This item will show on your portfolio`: `This item will be hidden from your portfolio`}</p>
                    <p>Tags: {portfolio.tags.map((tag, i)=>{
                        return(
                            <span> {tag} </span>
                        )
                    })}</p>
                    <p>Rating: {portfolio.rating}</p>

                </div>

            </Default>
            )
        }
    }
    
    // Export
    module.exports = Show;