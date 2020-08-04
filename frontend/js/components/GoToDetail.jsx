/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const img = require('./images/detail.png');

class GoToDetail extends React.Component {
    render() {
        return (
            <img src={img} width={16}/>
        );
    }
}

module.exports = GoToDetail;
