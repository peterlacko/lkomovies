import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';

import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class SearchFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit(event) {
        const { keyword } =  this.state;
        this.props.fetchMovies({ keyword });
        event.preventDefault();
    }

    render() {
        // TODO: send payload!!!
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    label='Type in movie name'
                    onChange={this.handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                >
                </TextField>
            </form>

        )
    }
}

const mapDispatchToProps = {
    fetchMovies,
};
export const SearchForm = connect(null,mapDispatchToProps)(SearchFormBase);