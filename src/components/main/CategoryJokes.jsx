import React from 'react'
import { connect } from 'react-redux'
import MainWrapper from '../shared/MainWrapper.jsx'
import CardLoader from '../shared/CardLoader.jsx'
import Alert from '../shared/Alert.jsx'
import Paginator from '../shared/Paginator.jsx'
import { fetchJokeByCategory } from '../../redux/actions/jokeActions'

class CategoryJokes extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            loading: true,
            error: null,
            currentJokes: [],
            currentPage: null,
            totalPages: null,
        }
    }

    componentDidMount() {
        const { category } = this.props.match.params 
        this.setJokesByCategory(category)
    }

    setJokesByCategory = category => {
        this.props.fetchJokeByCategory(category)
        this.setState({
            jokes: this.props.jokes,
            loading: this.props.loading,
            error: this.props.error
        })
    }

    onPageChanged = data => {
        const { jokes } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentJokes = jokes.slice(offset, offset + pageLimit)
    
        this.setState({ currentPage, currentJokes, totalPages })
    }

    renderJokes = () => {
        const { currentJokes, loading } = this.state
        if(loading) {
            return (
                <React.Fragment>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <CardLoader />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <CardLoader />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <CardLoader />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <CardLoader />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            if(currentJokes.length > 0) {
                if(Array.isArray(currentJokes)) {
                    return currentJokes.map((joke) => (
                        <div className="col-md-6" key={joke.id}>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <p className="card-text">{joke.value}</p>
                                    <p className="card-text"><small className="text-muted">Last updated {joke.updated_at}</small></p>
                                </div>
                            </div>
                        </div>
                    ))
                } else {
                    return (
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <p className="card-text">{currentJokes.value}</p>
                                    <p className="card-text"><small className="text-muted">Last updated {currentJokes.updated_at}</small></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            } else {
                return <Alert alertType='alert-warning' message="No jokes found" />
            }
        }
        
    }

    renderAlertMessage = () => {
        const { error } = this.props
        if(error.name) {
            return <Alert alertType='alert-danger' message={error.message} />
        } else {
            return <Alert alertType='alert-success' message={error.message} />
        }
    }

    render() {
        const {
            jokes,
            loading
        } = this.state;

        const totalJokes = jokes.length

        return (
            <MainWrapper>
                {!loading && jokes.length > 0 && this.renderAlertMessage() }
                <div className="row">
                    {this.renderJokes()}
                </div>
                {totalJokes > 0 && 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 d-flex justify-content-center">
                                <Paginator
                                    totalRecords={totalJokes}
                                    pageLimit={4}
                                    pageNeighbours={1}
                                    onPageChanged={this.onPageChanged}
                                />
                            </div>
                        </div>
                    </div>
                }
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes.jokes,
        loading: state.utilities.loading,
        error: state.utilities.error
    }
}

export default connect(
    mapStateToProps, 
    {fetchJokeByCategory}
) (CategoryJokes)