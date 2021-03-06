
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartdata from '../../../Hooks/useChartdata';

const InvestmentRevenueBar = () => {

    const [chartdata] = useChartdata();
    return (
        <div className='chart_area'>
            <div className="py-3 text-center"><h5>Month-wise investment, Revenue</h5></div>
            <BarChart height={400} width={500} data={chartdata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'investment'} fill={'#8884d8'}></Bar>
                <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>



        </div>
    );
};

export default InvestmentRevenueBar;