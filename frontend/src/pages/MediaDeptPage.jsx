import React from 'react';

const MediaDeptPage = () => {
  return (
    <div className="content">
      <h1 className="section-title">公共传播部</h1>
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
<label>媒体名称</label>
<input type="text" id="media-name" placeholder="请输入媒体名称" />
</div>
<div className="form-group">
<label>曝光标题</label>
<input type="text" id="headline" placeholder="请输入曝光标题" />
</div>
<div className="form-group">
<label>发布时间</label>
<input type="date" id="publish-date" placeholder="请输入发布时间" />
</div>
<div className="form-group">
<label>备注</label>
<textarea id="notes" rows="3" placeholder="请输入备注"></textarea>
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

export default MediaDeptPage;