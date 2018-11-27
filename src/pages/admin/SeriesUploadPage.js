import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../firebase/firebase';


class SeriesUploadPage extends Component {
    state = {
        seriesName: '',
        instructorName: '',
        posterUrl: '',
        description: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitting');
        console.log('series name', this.state.seriesName);
    }
    render() {
        return (
            <div>
                <h1>Create New Series</h1>
                <Form className="form" onSubmit={ (e) => this.onSubmit(e)}>
                    <FormGroup>
                        <Label for="seriesName">Series Name</Label>
                        <Input name="seriesName" placeholder="ie. Sensual Fundamentals" />                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="instructorName">Instructor</Label>
                        <Input name="instructorName" placeholder="ie. Joe Boxer"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="seriesPoster">Poster URL</Label>
                        <Input type="url" name="seriesPoster" placeholder="ie. http://www.image.com/image.jpg " />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" placeholder="Description here" />                        
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SeriesUploadPage;



