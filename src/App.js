import React, { Component } from "react";

import "./App.css";

const numRegex = RegExp(/^[0-9]+$/);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			costValues: {
				cost1: null,
				cost2: null,
				cost3: null,
				cost4: null,
				cost5: null,
				cost6: null,
			},
			priceValues: {
				shirt: 400,
				jeans: 800,
				trouser: 700,
				pullovers: 1000,
				jacket: 2000,
				sweater: 1300,
			},
			total: 0,
			discountPercent: null,
		};
	}

	handleCosts = (e) => {
		const { name, value } = e.target;
		let costValues = { ...this.state.costValues };
		let priceValues = { ...this.state.priceValues };
		let sum;

		switch (name) {
			case "cost1":
				let q1 = parseInt(value);
				sum = 0;
				costValues.cost1 = numRegex.test(value) ? q1 * priceValues.shirt : 0;
				Object.keys(costValues).forEach((key) => {
					if (
						numRegex.test(value) ||
						value.length === 0 ||
						value.includes(".", "+", "-", "e")
					) {
						sum += costValues[key];
					} else {
						sum += 0;
					}
				});
				this.setState(
					{ costValues, [name]: parseInt(value) * priceValues.shirt },
					() => console.log(this.state)
				);
				this.setState({ total: sum });
				break;
			case "cost2":
				let q2 = parseInt(value);
				sum = 0;
				costValues.cost2 = numRegex.test(value) ? q2 * priceValues.jeans : 0;
				Object.keys(costValues).forEach((key) => {
					if (
						numRegex.test(value) ||
						value.length === 0 ||
						value.includes(".", "+", "-", "e")
					) {
						sum += costValues[key];
					} else {
						sum += 0;
					}
				});
				this.setState(
					{ costValues, [name]: parseInt(value) * priceValues.jeans },
					() => console.log(this.state)
				);
				this.setState({ total: sum });

				break;
			case "cost3":
				let q3 = parseInt(value);
				sum = 0;
				costValues.cost3 = numRegex.test(value) ? q3 * priceValues.trouser : 0;
				Object.keys(costValues).forEach((key) => {
					if (
						numRegex.test(value) ||
						value.length === 0 ||
						value.includes(".", "+", "-", "e")
					) {
						sum += costValues[key];
					} else {
						sum += 0;
					}
				});
				this.setState(
					{ costValues, [name]: parseInt(value) * priceValues.trouser },
					() => console.log(this.state)
				);
				this.setState({ total: sum });
				break;
			case "cost4":
				let q4 = parseInt(value);
				sum = 0;
				costValues.cost4 = numRegex.test(value)
					? q4 * priceValues.pullovers
					: 0;
				Object.keys(costValues).forEach((key) => {
					if (
						numRegex.test(value) ||
						value.length === 0 ||
						value.includes(".", "+", "-", "e")
					) {
						sum += costValues[key];
					} else {
						sum += 0;
					}
				});

				this.setState(
					{ costValues, [name]: parseInt(value) * priceValues.pullovers },
					() => console.log(this.state)
				);
				this.setState({ total: sum });
				break;
			case "cost5":
				let q5 = parseInt(value);
				sum = 0;
				costValues.cost5 = numRegex.test(value) ? q5 * priceValues.jacket : 0;
				Object.keys(costValues).forEach((key) => {
					if (
						numRegex.test(value) ||
						value.length === 0 ||
						value.includes(".", "+", "-", "e")
					) {
						sum += costValues[key];
					} else {
						sum += 0;
					}
				});
				this.setState(
					{ costValues, [name]: parseInt(value) * priceValues.jacket },
					() => console.log(this.state)
				);
				this.setState({ total: sum });
				break;
			case "cost6":
				let q6 = parseInt(value);
				sum = 0;
				costValues.cost6 = numRegex.test(value) ? q6 * priceValues.sweater : 0;
				Object.keys(costValues).forEach((key) => {
					if (
						numRegex.test(value) ||
						value.length === 0 ||
						value.includes(".", "+", "-", "e")
					) {
						sum += costValues[key];
					} else {
						sum += 0;
					}
				});
				this.setState(
					{ costValues, [name]: parseInt(value) * priceValues.sweater },
					() => console.log(this.state)
				);
				this.setState({ total: sum });
				break;
			default:
				break;
		}
	};
	handleDiscount = (e) => {
		this.setState({ discountPercent: e.target.value });
	};
	render() {
		const { costValues } = this.state;
		const { priceValues } = this.state;
		const { total } = this.state;
		const { discountPercent } = this.state;
		return (
			<div className="wrapper">
				<table>
					<tbody>
						<tr>
							<th>Item</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Cost</th>
						</tr>
						<tr>
							<td>Shirts</td>
							<td>{priceValues.shirt}</td>
							<td>
								<input
									type="number"
									name="cost1"
									placeholder="Enter quantity..."
									onChange={this.handleCosts}
								></input>
							</td>
							<td>{costValues.cost1}</td>
						</tr>
						<tr>
							<td>Jeans</td>
							<td>{priceValues.jeans}</td>
							<td>
								<input
									type="number"
									name="cost2"
									placeholder="Enter quantity..."
									onChange={this.handleCosts}
								></input>
							</td>
							<td>{costValues.cost2}</td>
						</tr>
						<tr>
							<td>Trousers</td>
							<td>{priceValues.trouser}</td>
							<td>
								<input
									type="number"
									name="cost3"
									placeholder="Enter quantity..."
									onChange={this.handleCosts}
								></input>
							</td>
							<td>{costValues.cost3}</td>
						</tr>
						<tr>
							<td>Pullovers</td>
							<td>{priceValues.pullovers}</td>
							<td>
								<input
									type="number"
									name="cost4"
									placeholder="Enter quantity..."
									onChange={this.handleCosts}
								></input>
							</td>
							<td>{costValues.cost4}</td>
						</tr>
						<tr>
							<td>Jackets</td>
							<td>{priceValues.jacket}</td>
							<td>
								<input
									type="number"
									name="cost5"
									placeholder="Enter quantity..."
									onChange={this.handleCosts}
								></input>
							</td>
							<td>{costValues.cost5}</td>
						</tr>
						<tr>
							<td>Sweaters</td>
							<td>{priceValues.sweater}</td>
							<td>
								<input
									type="number"
									name="cost6"
									placeholder="Enter quantity..."
									onChange={this.handleCosts}
								></input>
							</td>
							<td>{costValues.cost6}</td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td>
								<h3 className="totallabel">Total:</h3>
							</td>
							<td>{total}</td>
						</tr>
					</tbody>
				</table>
				<div className="discountdiv">
					<input
						type="range"
						id="discount"
						name="discount"
						min="0"
						max="50"
						step="1"
						onChange={this.handleDiscount}
					></input>
					<h4>Discount: {discountPercent}%</h4>
					<h3 margin="10px">
						Price after discount: {total - (discountPercent * total) / 100}
					</h3>
				</div>
			</div>
		);
	}
}

export default App;
