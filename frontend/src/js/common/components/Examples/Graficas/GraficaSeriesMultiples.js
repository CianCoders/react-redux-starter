import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from "react-bootstrap-table";
import { Chart } from "react-google-charts";
import LoadMask from "../../Utils/LoadMask/LoadMask";

export default class GraficaSeriesMultiples extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        opciones: PropTypes.object.isRequired
    };

    static defaultProps = {
        loading: false
    };

    componentWillMount() {
        
    }

    render() {
        const { data, opciones, } = this.props;

        return (
            <Chart
               width={'100%'}
               height={'100%'}
               chartType="BarChart"
               loader={  <LoadMask loading={true} dark ></LoadMask>}
               data={ data }
               options={ opciones }
               // For tests
               rootProps={{ 'data-testid': '1' }}
             />
        )
    }
}
