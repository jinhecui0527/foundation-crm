import React from 'react';

const BrandDeptPage = () => {
  return (
    <div className="content">
      <h1 className="section-title">品牌项目部</h1>
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
<label>项目名称</label>
<input type="text" id="project-name" placeholder="请输入项目名称" />
</div>
<div className="form-group">
<label>预算 (¥)</label>
<input type="number" id="project-budget" placeholder="请输入预算 (¥)" />
</div>
<div className="form-group">
<label>状态</label>
<select id="project-status">
<option value="待启动">待启动</option>
<option value="进行中">进行中</option>
<option value="已完成">已完成</option>
</select>
</div>
<div className="form-group">
<label>开始日期</label>
<input type="date" id="project-start" placeholder="请输入开始日期" />
</div>
<div className="form-group">
<label>结束日期</label>
<input type="date" id="project-end" placeholder="请输入结束日期" />
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

export default BrandDeptPage;