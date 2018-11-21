import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const EditionNameList = (props) => (
    <div>        
        {props.editionTypeNames.map((name) => (
            <div key={name}>
                <Link to={`/editions/music/${name}`}>
                    {name}
                </Link>
            </div>
        ))
        }
    </div>
)
class MusicPage extends Component {
    componentDidMount() {
        this.props.editionStore.loadEdition('music');
    }
    render() {
        const editionStore = this.props.editionStore;
        if (editionStore.isEditionLoaded) {
            return(
                <div>
                    <h1>Music Video Edition</h1>
                    <h2>
                        Our Music Video Edition goes up to 11. Creators from British Columbia and Alberta combine music and film in one beautiful package.  
                    </h2>
                    <EditionNameList editionTypeNames={editionStore.editionTypeNames} />
                </div>
            )
        } else {
            return null;
        }
    }

}
export default inject('editionStore')(observer(MusicPage));