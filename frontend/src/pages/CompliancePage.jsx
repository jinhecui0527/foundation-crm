
import React from 'react';

const CompliancePage = () => {
  return (
    <div className="content">
      <h1 className="section-title">合规审查</h1>
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 className="card-title">政策审查</h3>
        <p>在此模块中将处理合规检查、制度审核、流程监督等内容。</p>
      </div>

      <div className="card">
        <h3 className="card-title">新增合规记录</h3>
        <form>
          <div className="form-group">
            <label>审查项目</label>
            <input type="text" placeholder="请输入审查项目" />
          </div>
          <div className="form-group">
            <label>负责人</label>
            <input type="text" placeholder="请输入负责人" />
          </div>
          <div className="form-group">
            <label>审查日期</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>备注</label>
            <textarea rows="3" placeholder="请输入备注说明"></textarea>
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

export default CompliancePage;
