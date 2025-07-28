const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const users = []; // 示例用，实际应连接数据库

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (password.length < 6) return res.status(400).json({ message: 'Password too short' });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
