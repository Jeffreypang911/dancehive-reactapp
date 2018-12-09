import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import 'typeface-roboto';
import RootStore from './models/RootStore';
import AppRouter from './routers/AppRouter';


class App extends Component {
  componentDidMount() {
    this.loadRootStore();
  }

  async loadRootStore() {
    this.setState(
      {
        rootStore: await RootStore.create({})
      }
    );
  }
  render() {
    // Check and set RootStore
    const rootStore = this.state && this.state.rootStore;

    if (!rootStore) {
      return null; 
    };

    const stores = {
      rootStore: rootStore,
      storyListStore: rootStore.storyListStore,
      courseStore: rootStore.courseStore,
      editionStore: rootStore.editionStore,
      userStore: rootStore.userStore
    }

    return (
      <Provider {...stores}>
        <AppRouter />
      </Provider>
      
    )
  }
}

export default App;
