
import React from 'react';

const FinancePage = () => {
  return (
    <div className="content">
      <h1 className="section-title">财务管理</h1>
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 className="card-title">财务明细</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>项目</th>
              <th>金额 (¥)</th>
              <th>类型</th>
              <th>日期</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>办公采购</td>
              <td>800</td>
              <td>支出</td>
              <td>2025-07-28</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3 className="card-title">新增收支</h3>
        <form>
          <div className="form-group">
            <label>项目</label>
            <input type="text" placeholder="请输入项目名称" />
          </div>
          <div className="form-group">
            <label>金额</label>
            <input type="number" placeholder="¥" />
          </div>
          <div className="form-group">
            <label>类型</label>
            <select>
              <option>收入</option>
              <option>支出</option>
            </select>
          </div>
          <div className="form-group">
            <label>日期</label>
            <input type="date" />
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">提交</button>
            <button className="btn btn-outline" type="reset">重置</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinancePage;
