import React, { Component } from 'react';
import {Button, Row, Col, Table} from 'react-bootstrap';
import {FaRefresh} from 'react-icons/lib/fa';


class TopStocks extends Component {
    constructor(){
        super();
        this.top_stocks = this.getTopStocks();
    }

    getTopStocks() {
        return [
            {"name" : "HMNY", "price": ".20", "movement": "-12", "volume": "6000000"},
            {"name" : "BPMX", "price": ".20", "movement": "-12", "volume": "6000000"},
            {"name" : "AMD", "price": ".20", "movement": "-12", "volume": "6000000"},
            {"name" : "NVIDIA", "price": ".20", "movement": "12", "volume": "6000000"},
        ];
    }

    render() {
        return (
            <div id="top">
                <Row>
                    <Col md="9" className="text-left"><h1>Top 10 Marked</h1></Col>
                    <Col md="3" className="text-right"><Button pill><FaRefresh/></Button></Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table striped responsive hover bordered>
                            <thead>
                                <tr>
                                  <th>Rank</th>
                                  <th>Stock Handle</th>
                                  <th>Last Price</th>
                                  <th>Movement %</th>
                                  <th>Volume</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.top_stocks.map((stock, i) => {
                                    return (
                                        <tr>
                                          <td>{i+1}</td>
                                          <td>{stock.name}</td>
                                          <td>{stock.price}</td>
                                          <td>{stock.movement}</td>
                                          <td>{stock.volume}</td>
                                        </tr>
                                    );  
                                })}
                              </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    };
}

export default TopStocks;