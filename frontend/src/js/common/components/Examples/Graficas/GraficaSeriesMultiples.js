import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from "react-bootstrap-table";
import { Chart } from "react-google-charts";

export default class GraficaSeriesMultiples extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        opciones: PropTypes.bool.isRequired
    };

    static defaultProps = {
        loading: false
    };

    componentWillMount() {
        
    }

    render() {
        const { data, opciones } = this.props;

        return (
            <Chart
               width={'100%'}
               height={'100%'}
               chartType="BarChart"
               loader={<div>Loading Chart</div>}
               data={ data }
               options={ opciones }
               // For tests
               rootProps={{ 'data-testid': '1' }}
             />
        )
    }
}
