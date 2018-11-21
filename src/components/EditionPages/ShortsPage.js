import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const EditionNameList = (props) => (
    <div>        
        {props.editionTypeNames.map((name) => (
            <div key={name}>
                <Link to={`/editions/shorts/${name}`}>
                    {name}
                </Link>
            </div>
        ))
        }
    </div>
)
class ShortsPage extends Component {
    componentDidMount() {
        this.props.editionStore.loadEdition('short');
    }
    render() {
        const editionStore = this.props.editionStore;
        if (editionStore.isEditionLoaded) {
            return(
                <div>
                    <h1>Digital Shorts Edition</h1>
                    <h2>
                       Our bite-sized short films are a tasty way for emerging and established filmmakers to tell their stories. We’ve been lucky to greenlight some incredible ideas from creators across British Columbia and Alberta since 2015.
                    </h2>
                    <EditionNameList editionTypeNames={editionStore.editionTypeNames} />
                </div>
            )
        } else {
            return null;
        }
    }

}
export default inject('editionStore')(observer(ShortsPage));