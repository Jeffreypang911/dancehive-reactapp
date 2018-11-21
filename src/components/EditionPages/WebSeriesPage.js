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
class WebSeriesPage extends Component {
    componentDidMount() {
        this.props.editionStore.loadEdition('web');
    }
    render() {
        const editionStore = this.props.editionStore;
        if (editionStore.isEditionLoaded) {
            return(
                <div>
                    <h1>Web Series Edition</h1>
                    <h2>
                    Check out funny, epic and heartwarming web series, as well as funding opportunites for your own pilot!
                    </h2>
                    <EditionNameList editionTypeNames={editionStore.editionTypeNames} />
                </div>
            )
        } else {
            return null;
        }
    }

}
export default inject('editionStore')(observer(WebSeriesPage));