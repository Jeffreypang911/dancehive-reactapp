import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Story from '../components/Story';
import NotFoundPage from '../components/NotFoundPage';
import LandingPage from '../components/LandingPage';
import MusicPage from '../components/EditionPages/MusicPage';
import EditionListView from '../components/EditionPages/EditionListView';
import ShortsPage from '../components/EditionPages/ShortsPage';
import WebSeriesPage from '../components/EditionPages/WebSeriesPage';
import SeriesUploadPage from '../pages/admin/SeriesUploadPage';
import ButtonAppBar from '../components/ButtonAppBar';
import Dashboard from '../pages/Dashboard';

class AppRouter extends Component {
    render() {        
        return(
            <BrowserRouter>
            <div>
                <ButtonAppBar />
                <Switch>
                    <Route path="/" component={LandingPage} exact={true}/>
                    <Route path="/dashboard" component={Dashboard} exact={true}/>
                    <Route path="/editions/music" component={MusicPage} exact={true}/>
                    <Route path="/editions/shorts" component={ShortsPage} exact={true}/>
                    <Route path="/editions/web-series" component={WebSeriesPage} exact={true}/>
                    <Route path="/story/:id" render={(props) => <Story {...props} />} />
                    <Route path="/editions/music/:slug" component={EditionListView} />                    
                    <Route path="/editions/shorts/:slug" component={EditionListView} />                    
                    <Route path="/admin/series-upload" component={SeriesUploadPage} />
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>     
        </BrowserRouter>
        )
   }
}

export default inject('courseStore')(observer(AppRouter));