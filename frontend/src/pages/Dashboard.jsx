
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Dashboard = () => {
  const donationChartRef = useRef(null);
  const incomeChartRef = useRef(null);

  useEffect(() => {
    // 示例数据请求
    axios.get('/api/dashboard/summary').then(() => {
      // 实际数据使用 res.data 替换
      const lineChart = new Chart(donationChartRef.current, {
        type: 'line',
        data: {
          labels: ['1月', '2月', '3月', '4月', '5月'],
          datasets: [{
            label: '捐赠趋势 (¥)',
            data: [5000, 8000, 6000, 9000, 12000],
            fill: false,
            borderColor: 'blue',
            tension: 0.1
          }]
        }
      });

      const pieChart = new Chart(incomeChartRef.current, {
        type: 'pie',
        data: {
          labels: ['收入', '支出'],
          datasets: [{
            label: '财务比例',
            data: [30000, 18000],
            backgroundColor: ['green', 'red']
          }]
        }
      });

      return () => {
        lineChart.destroy();
        pieChart.destroy();
      };
    });
  }, []);

  return (
    <div className="content">
      <h1 className="section-title">仪表盘</h1>
      <div className="card">
        <h3 className="card-title">捐赠金额趋势</h3>
        <canvas ref={donationChartRef}></canvas>
      </div>
      <div className="card">
        <h3 className="card-title">收支比例</h3>
        <canvas ref={incomeChartRef}></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
