import React from 'react';

const ExpandDeptPage = () => {
  return (
    <div className="content">
      <h1 className="section-title">拓展部</h1>
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
<label>合作单位</label>
<input type="text" id="partner-name" placeholder="请输入合作单位" />
</div>
<div className="form-group">
<label>联系负责人</label>
<input type="text" id="contact-person" placeholder="请输入联系负责人" />
</div>
<div className="form-group">
<label>沟通记录</label>
<textarea id="notes" rows="3" placeholder="请输入沟通记录"></textarea>
</div>
<div className="form-group">
<label>沟通日期</label>
<input type="date" id="contact-date" placeholder="请输入沟通日期" />
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

export default ExpandDeptPage;