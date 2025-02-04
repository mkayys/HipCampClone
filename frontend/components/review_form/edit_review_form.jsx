import React from 'react';

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            spot_id: this.props.spotId,
            // body: (this.props.review ? this.props.review.body : '')
            body: this.props.review.body
        }
        // spot_id is coming from prop threading in the spot show page
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);

    }


    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();

        const review = Object.assign({}, this.state);
        review.id = this.props.review.id;
        this.props.updateReview(review)
            .then(this.props.toggleEditStatus);

    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }


    renderErrors() {
        return (
            <div>
                <ul className='login-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


    render() {
        // debugger
        return (
            <div className="edit-review-form-container">
                {this.renderErrors()}
                <input
                    className="edit-review-body"
                    type="text"
                    value={this.state.body}
                    onChange={this.updateBody} />

                <input
                    className='edit-review-button'
                    type="submit"
                    value="Update"
                    onClick={this.handleSubmit} />

                <i className="fas fa-times"
                    onClick={this.props.toggleEditStatus}></i>

            </div>
        );

    }
}

export default EditReviewForm;