import React from 'react';
import { AxiosResponse } from 'axios';
import { createBrowserHistory, History } from 'history';

import List from './pages/List';
import { getItems } from './actions/item.actions';
import { ItemProvider } from './context/item.context';
import { ITodo } from './interface/item.interface';

import 'antd/dist/antd.css';
import './App.css';

export const history: History = createBrowserHistory();

interface State {
  items: ITodo[];
}

interface Props {}

class App extends React.Component<Props, State> {
  state = { items: [] };

  getItems = async (): Promise<void> => {
    const response: AxiosResponse = await getItems();
    if (response.status === 200) {
      this.setState({ items: response.data });
    }
  }

  componentDidMount(): void {
    this.getItems();
  }

  render() {
    return (
      <div className="App">
        <ItemProvider value={{items: this.state.items, getItems: this.getItems}}>
          <List />
        </ItemProvider>
      </div>
    );
  }
}

export default App;