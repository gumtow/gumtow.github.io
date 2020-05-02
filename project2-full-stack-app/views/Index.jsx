const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Index extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title="The Portfolio of Jesse Gumtow">
                <div className="row">
                    {
                        portfolio.map((portfolioItem, i)=>{
                            return(
                                <div className="col-md-4" key={i}>
                                    <h3>{portfolioItem.title}</h3>
                                    <img src={portfolioItem.img} alt={portfolioItem.title}/>
                                    <p>{portfolioItem.description}</p>

                                </div>
                            )
                        })
                    }
                </div>

            </Default>
        )
    }
}

// Export
module.exports = Index;