import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from "react-bootstrap-table";
import { Chart } from "react-google-charts";


import GraficaSeriesMultiples from './GraficaSeriesMultiples';


export default class Graficas extends Component {

    static defaultProps = {
        loading: false
    };

    componentWillMount() {
        
    }

    render() {
        //const { data, loader, listar: onPageChange, onSortChange } = this.props;

        return (
            <div className="py-4">
               <h2>GRÁFICAS</h2>
                <div className="row">
                    <div className="mb-4 col-lg-12">
                        <div className="mb-4 card card-small">
                            <div className="border-bottom card-header d-flex justify-content-center">
                                <h3 className="m-0">Bar Chart</h3>
                            </div>
                            <div className="p-0 px-3 py-3">
                                 <h4>Con series múltiples</h4>
                                 <GraficaSeriesMultiples 
                                    data={[
                                         ['Ciudad', 'Población en 2010', 'Población en 2000'],
                                         ['Ciudad de Nueva York, NY', 8175000, 8008000],
                                         ['Los Angeles, CA', 3792000, 3694000],
                                         ['Chicago, IL', 2695000, 2896000],
                                         ['Houston, TX', 2099000, 1953000],
                                         ['Philadelphia, PA', 1526000, 1517000],
                                    ]}
                                    opciones={{
                                         title: 'Población de las Ciudades más grandes de Estados Unidos',
                                         chartArea: { width: '50%' },
                                         hAxis: {
                                           title: 'Población Total',
                                           minValue: 0,
                                         },
                                         vAxis: {
                                           title: 'Ciudad',
                                         },
                                       }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
