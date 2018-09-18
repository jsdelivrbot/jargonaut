import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tab.css';
import Tab from "./tab";

class TabBase extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.title,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({activeTab: tab})
  };

  render() {
    const {
      onClickTabItem,
      props: {children},
      state: {activeTab}
    } = this;
    return(
      <div>
        <ol className="tab-list">
        {children.map((child) => {
          const {title} = child.props;
          return (
            <Tab
              activeTab={activeTab} key={title} title={title} onClick={onClickTabItem}
            />
          );
        })}
        </ol>
        <div>
          {children.map((child)=> {
            if (child.props.title !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }


}

export default TabBase;
