import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MainWrapper from '../shared/MainWrapper.jsx'
import Alert from '../shared/Alert.jsx'
import Paginator from '../shared/Paginator.jsx'
import TableLoader from '../shared/TableLoader.jsx'
import { fetchCategories } from '../../redux/actions/categoryActions'

class Categories extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            loading: true,
            error: null,
            currentCategories: [],
            currentPage: null,
            totalPages: null,
        }
    }

    componentDidMount() {
        this.fetchAndSetCategories()
    }

    fetchAndSetCategories = async () => {
        await this.props.fetchCategories()
        this.setState({
            categories: this.props.categories,
            loading: this.props.loading,
            error: this.props.error
        })
    }

    onPageChanged = data => {
        const { categories } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentCategories = categories.slice(offset, offset + pageLimit);
    
        this.setState({ currentPage, currentCategories, totalPages });
    }

    renderCategories = () => {
        const { currentCategories, loading } = this.state
        if(loading) {
            return <TableLoader />
        } else {
            if(currentCategories.length > 0) {
                if(Array.isArray(currentCategories)) {
                    return (
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentCategories.map((category) => (
                                        <tr key={category}>
                                            <td>{category}</td>
                                            <td>
                                                <Link to={`/category/${category}`} className="btn btn-primary btn-sm">View Jokes</Link>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            } else {
                return (
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="2">No categories found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
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
            categories,
            loading
        } = this.state;

        const totalCategories = categories.length
        return (
            <MainWrapper>
                {!loading && categories.length > 0 && this.renderAlertMessage() }
                
                {this.renderCategories()}
                
                {totalCategories > 0 && 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 d-flex justify-content-center">
                                <Paginator
                                    totalRecords={totalCategories}
                                    pageLimit={5}
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

const mapStateToProps = state => (
    {
        categories: state.categories.categories,
        loading: state.utilities.loading,
        error: state.utilities.error
    }
)

export default connect(
    mapStateToProps, 
    {fetchCategories}
) (Categories)