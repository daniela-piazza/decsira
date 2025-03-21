/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Node = require('@mapstore/components/TOC/Node');
const GroupTitle = require('frontend/js/components/toc/fragments/GroupTitle');
const GroupChildren = require('frontend/js/components/toc/fragments/GroupChildren');
const VisibilityCheck = require('frontend/js/components/toc/fragments/VisibilityCheck');
const PropTypes = require('prop-types');

class Group extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        expanded: PropTypes.bool,
        style: PropTypes.object,
        onToggle: PropTypes.func,
        onSort: PropTypes.func,
        onRemove: PropTypes.func,
        onSettings: PropTypes.func,
        propertiesChangeHandler: PropTypes.func
    };

    static defaultProps = {
        node: {},
        onToggle: () => {},
        onRemove: () => {},
        onSettings: () => {},
        propertiesChangeHandler: () => {},
        expanded: true,
        style: {
            marginBottom: "16px",
            cursor: "pointer"
        }
    };

    render() {
        let {children, onToggle, ...other } = this.props;
        let visibilityStyle = {
            visibility: this.props.node.name === 'background' ? 'hidden' : 'visible',
            marginLeft: "5px",
            marginRight: "5px", "float": "left",
            marginTop: "7px"
        };
        return (
            <Node type="group" {...other}>
                <VisibilityCheck key="visibility" propertiesChangeHandler={this.props.propertiesChangeHandler} style={visibilityStyle}/>
                <GroupTitle onClick={this.props.onToggle}/>
                <GroupChildren onSort={this.props.onSort} position="collapsible">
                    {this.props.children}
                </GroupChildren>
            </Node>
        );
    }
}

module.exports = Group;
