/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Glyphicon, OverlayTrigger, Tooltip} = require('react-bootstrap');
const Message = require('@mapstore/components/I18N/Message');
require("./css/layertool.css");
const PropTypes = require('prop-types');

class LayersTool extends React.Component {
    static propTypes = {
        node: PropTypes.object,
        onClick: PropTypes.func,
        style: PropTypes.object,
        glyph: PropTypes.string,
        tooltip: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        onClick: () => {}
    };

    render() {
        const cn = this.props.className ? " " + this.props.className : "";
        const tool = (<Glyphicon className={"toc-layer-tool" + cn} style={this.props.style}
            glyph={this.props.glyph}
            onClick={(options) => this.props.onClick(this.props.node, options || {})}/>);
        return this.props.tooltip ? (
            <OverlayTrigger placement="bottom" overlay={(<Tooltip id={"Tooltip-" + this.props.tooltip}><strong><Message msgId={this.props.tooltip}/></strong></Tooltip>)}>
                {tool}
            </OverlayTrigger>) : tool;

    }
}

module.exports = LayersTool;
