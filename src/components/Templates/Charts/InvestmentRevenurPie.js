import React from 'react';
import {Pie, PieChart, Tooltip } from 'recharts';
import useChartdata from '../../../Hooks/useChartdata';

const InvestmentRevenurPie = () => {
    const [chartdata] = useChartdata();
    return (
        <div className="chart_area">
              <div className="py-3 text-center"><h5>investment, Revenue Piechart</h5></div>
                <PieChart width={600} height={500}>
                    <Pie data={chartdata} dataKey={'investment'} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" ></Pie>
                    <Pie data={chartdata} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={160} outerRadius={200} fill="#82ca9d" label></Pie>
             
                    <Tooltip></Tooltip>
                </PieChart>
        </div>
    );
};

export default InvestmentRevenurPie;