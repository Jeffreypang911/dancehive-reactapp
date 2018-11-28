import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../firebase/firebase';

class SeriesUploadPage extends Component {
    state = {
        seriesName: '',
        instructorName: '',
        posterUrl: '',
        description: '',
    }

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            {
                cloud_name: 'dance-hive',
                upload_preset: 'series_posters',
                tags: ['poster'],
                sources: ['local','url','google_photos','facebook','image_search']
            },
            function(error, result) {
                console.log("Last upload result", result);
            }
        )
    }

    handleChange = (e) => {
        const { target } = e;
        const { name } = target;
        const { value } = target;
        console.log(value);
        console.log(name);
        this.setState({
            [name]: value // need to ask about this syntax
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        console.log('submitting');
        console.log('series name: ', this.state.seriesName);
        console.log('instructor name: ', this.state.instructorName);
    }
    render() {
        return (
            <div>
                <h1>Create New Series</h1>
                <Form className="form" onSubmit={ (e) => this.onSubmit(e)}>
                    <FormGroup>
                        <Label for="seriesName">Series Name</Label>
                        <Input 
                            name="seriesName" 
                            placeholder="ie. Sensual Fundamentals"
                            onChange={ (e) => {
                                this.handleChange(e);
                            }}
                        />                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="instructorName">Instructor</Label>
                        <Input 
                            name="instructorName" 
                            placeholder="ie. Joe Boxer"
                            onChange={ (e) => {
                                this.handleChange(e);
                            }}
                        />
                    </FormGroup>
                    
                    <Button color="secondary" onClick={ () => {this.uploadWidget()}}>Upload Poster</Button>
                    
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input 
                            type="textarea" 
                            name="description" 
                            placeholder="Description here"
                            onChange={ (e) => {
                                this.handleChange(e);
                            }} 
                        />                        
                    </FormGroup>
                    
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SeriesUploadPage;



