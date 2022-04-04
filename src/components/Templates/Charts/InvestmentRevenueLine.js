import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartdata from '../../../Hooks/useChartdata';

const InvestmentRevenueLine = () => {
    const [chartdata] = useChartdata();

    return (
        <div className="chart_area">
                <div className="py-3 text-center"><h5>Month-wise Sale</h5></div>

                <LineChart width={600} height={500} data={chartdata}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    {/* <Line type="monotone" dataKey="revenue" stroke="#82ca9d" /> */}
                </LineChart>
          

        </div>
    );
};

export default InvestmentRevenueLine;