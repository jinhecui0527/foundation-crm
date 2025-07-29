
import React, { useState } from 'react';
import axios from 'axios';

const AssistantPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const res = await axios.post('/api/ai', { message: input });
      const reply = { role: 'assistant', content: res.data.reply || '（AI 回复）' };
      setMessages((prev) => [...prev, reply]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: '请求失败，请稍后再试。' }]);
    }
  };

  return (
    <div className="content">
      <h1 className="section-title">智能助手</h1>
      <div className="card" style={{ minHeight: '400px' }}>
        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.role === 'user' ? 'chat-bubble user' : 'chat-bubble ai'}>
              <strong>{msg.role === 'user' ? '我：' : 'AI：'}</strong>{msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="chat-input-area">
          <input
            type="text"
            placeholder="请输入您的问题…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">发送</button>
        </form>
      </div>
    </div>
  );
};

export default AssistantPage;
