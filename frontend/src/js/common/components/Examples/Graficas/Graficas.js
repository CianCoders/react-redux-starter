import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from "react-bootstrap-table";
import { Chart } from "react-google-charts";

import GraficaSeriesMultiples from './GraficaSeriesMultiples';
import GraficaStacked from './GraficaStacked';
import GraficaRightY from './GraficaRightY';


export default class Graficas extends Component {

	static defaultProps = {
		loading: false
	};

	componentDidMount() {
		this.props.getData();
	}

	render() {
		const { data, loader } = this.props;
		const opciones = {   title: 'Población de las Ciudades más grandes de Estados Unidos',
							 chartArea: { width: '50%' },
							 hAxis: {
							   title: 'Población Total',
							   minValue: 0,
							 },
							 vAxis: {
							   title: 'Ciudad',
							 },
							 colors: ['#b0120a', '#ffab91'],
						}
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
									data={ data }
									opciones={ opciones }/>
							</div>
							<div className="p-0 px-3 py-3">
								 <h4>Stacked bar chart con múltiples series</h4>
								 <GraficaStacked 
									data={ data }
									opciones={opciones}/>

							</div>
							<div className="p-0 px-3 py-3">
								 <h4>Eje Y a la derecha</h4>
								 <GraficaRightY 
									data={ data }
									opciones={opciones}/>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}