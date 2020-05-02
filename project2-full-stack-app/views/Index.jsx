const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Index extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title="The Portfolio of Jesse Gumtow">
                <nav>
                        <a className="btn btn-primary" href="/jgumtow/new">Create new portfolio item</a>
                    </nav>
                <div className="row">
                    {
                        portfolio.map((portfolioItem, i)=>{
                            return(
                                <div className="col-md-3" key={i}>
                                    <a href={`/jgumtow/${portfolioItem.id}`}>
                                        <div>
                                            <h3>{portfolioItem.title}</h3>
                                            <img className="img-fluid" src={portfolioItem.img} alt={portfolioItem.title}/>
                                            <p>{portfolioItem.description}</p>

                                        </div>
                                    </a>
                                    <a className="btn btn-outline-info btn-sm" href={`/jgumtow/${portfolioItem.id}/edit`}>Edit</a>
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