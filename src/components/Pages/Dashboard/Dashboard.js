import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagetitle from '../../global/Title/Pagetitle';
import InvestmentRevenueArea from '../../Templates/Charts/InvestmentRevenueArea';
import InvestmentRevenueBar from '../../Templates/Charts/InvestmentRevenueBar';
import InvestmentRevenueLine from '../../Templates/Charts/InvestmentRevenueLine';
import InvestmentRevenurPie from '../../Templates/Charts/InvestmentRevenurPie';


const Dashboard = () => {
    return (
        <div className="dashboard">
            <Pagetitle title = "Company Analytics"  disc ="Monthly analytics of our companies Revenue, Investements and sales" ></Pagetitle>
            <Container>
                <Row>
                    <Col md={6}>
                        <InvestmentRevenueLine></InvestmentRevenueLine>
                    </Col>
                    <Col md={6}  >
                        <InvestmentRevenueArea></InvestmentRevenueArea>
                    </Col>
                    <Col md={6}>
                        <InvestmentRevenueBar></InvestmentRevenueBar>
                    </Col>
                    <Col md={6}>
                        <InvestmentRevenurPie></InvestmentRevenurPie>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;