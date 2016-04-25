import React from 'react';

import {Tabbar, Tab, Page, Button} from 'react-onsenui';
import MyToolbar from './MyToolbar';

class TabPage extends React.Component {

  render() {
    console.log('render tab: ' + this.props.index + ' ' +  this.props.active);
    return (
      <Page renderToolbar={() => <MyToolbar title={this.props.title} />} >
        {this.props.active
          ? <p>This is the <strong>{this.props.title}</strong> page.</p> : null}

          <Button onClick={() => {this.props.onSwitchClick()}}>Go to the other tab</Button>
      </Page>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.renderTabs = this.renderTabs.bind(this);
    this.switchTab = this.switchTab.bind(this);
    this.state = {
      activeIndex: 0
    };
  }

  switchTab() {
    console.log('switch tab');
    this.setState({
      activeIndex: (this.state.activeIndex + 1) % 2
    });
  }

  renderTabs(activeIndex, tabbar) {
    return [
      {
        content: <TabPage onSwitchClick={this.switchTab} index={0} title='Home' active={activeIndex === 0} tabbar={tabbar} />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <TabPage onSwitchClick={this.switchTab} index={1} title='Settings' active={activeIndex === 1} tabbar={tabbar} />,
        tab: <Tab label='Settings' icon='md-settings' />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar
          activeIndex={this.state.activeIndex}
          onPreChange={() => console.log('preChange')}
          onPostChange={() => console.log('postChange')}
          onReactive={() => console.log('postChange')}
          position='bottom'
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}
