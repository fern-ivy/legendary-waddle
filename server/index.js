const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'db.json');

// 初始化数据库文件
// 初始化数据库文件
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], pets: [] }, null, 2));
}

// 读取数据库
const getDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
// 写入数据库
const saveDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// 注册接口
app.post('/api/register', (req, res) => {
    const { account, password, hint } = req.body;
    const db = getDB();

    // 检查是否已存在
    if (db.users.find(u => u.account === account)) {
        return res.status(400).json({ message: '该账号已注册' });
    }

    // 存入
    db.users.push({ account, password, hint, role: 'OWNER' });
    saveDB(db);

    res.json({ message: '注册成功' });
});

// 登录接口
app.post('/api/login', (req, res) => {
    const { account, password } = req.body;
    const db = getDB();

    const user = db.users.find(u => u.account === account && u.password === password);
    if (!user) {
        return res.status(401).json({ message: '账号或密码错误' });
    }

    // 模拟发个 Token
    const mockToken = 'mock-token-' + Date.now();
    res.json({ message: '登录成功', token: mockToken });
});

// 获取主人的宠物列表
app.get('/api/pets', (req, res) => {
    const { account } = req.query; // 真实情况应该从 Token 里解析，这里为了简单直接传 account
    const db = getDB();
    const myPets = db.pets.filter(p => p.ownerAccount === account);
    res.json({ data: myPets });
});

/// 新增宠物档案
app.post('/api/pets', (req, res) => {
    const {
        ownerAccount,
        ownerName,
        petName,
        species,
        breed,
        gender,
        birthDate,
        weight,
        medicalHistory
    } = req.body;

    const db = getDB();

    const newPet = {
        id: Date.now(),
        ownerAccount: ownerAccount || 'admin',
        ownerName: ownerName || '未知主人',
        petName: petName || '未命名',
        species: species || '未知',
        breed: breed || '未知',
        gender: gender || '未知',
        birthDate: birthDate || '',
        weight: weight || 0,
        medicalHistory: medicalHistory || '',
        createdAt: new Date().toLocaleDateString()
    };

    db.pets.push(newPet);
    saveDB(db);
    res.json({ message: '建档成功', data: newPet });
});

// 启动服务器
app.listen(9001, () => {
    console.log('✅ 极简后端已启动: http://localhost:9001');
});