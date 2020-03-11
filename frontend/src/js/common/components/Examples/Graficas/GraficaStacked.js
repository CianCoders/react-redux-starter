import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from "react-bootstrap-table";
import { Chart } from "react-google-charts";
import LoadMask from "../../Utils/LoadMask/LoadMask";
export default class GraficaStacked extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        opciones: PropTypes.object.isRequired
    };

    componentWillMount() {
        
    }

    render() {
        const { data, opciones } = this.props;

        return (
          /*El componente de readt-google-chart tiene un pequeño delay antes de mostrar la data
          **Por lo que se ha decidido dejar la gestión del loader a cargo del componente
          */
            <Chart
              width={'100%'}
              height={'100%'}
              chartType="BarChart"
              loader={  <LoadMask loading={true} dark ></LoadMask>}
              data={ data }
              options={{...opciones,isStacked: true} }
              // For tests
              rootProps={{ 'data-testid': '3' }}
            />

        )
    }
}


//https://react-google-charts.com/bar-chart#stacked-bar-chart-with-multiple-series