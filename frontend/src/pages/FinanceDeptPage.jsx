import React from 'react';

const FinanceDeptPage = () => {
  return (
    <div className="content">
      <h1 className="section-title">合规财务部</h1>
      <div className="card" style={ marginBottom: '2rem' }>
        <h3 className="card-title">数据总览</h3>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>示例字段</th>
                <th>数据</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>示例值</td>
                <td>示例内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">添加新记录</h3>
        <form>
          <div className="form-group">
<label>收支项目</label>
<input type="text" id="finance-item" placeholder="请输入收支项目" />
</div>
<div className="form-group">
<label>金额 (¥)</label>
<input type="number" id="finance-amount" placeholder="请输入金额 (¥)" />
</div>
<div className="form-group">
<label>类型</label>
<select id="finance-type">
<option value="收入">收入</option>
<option value="支出">支出</option>
</select>
</div>
<div className="form-group">
<label>日期</label>
<input type="date" id="finance-date" placeholder="请输入日期" />
</div>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">保存</button>
            <button className="btn btn-outline" type="reset">取消</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinanceDeptPage;