# crud-node
基于nodejs、express实现学生数据增删改查CURD，第一版采用JSON文件存储学生数据，第二版使用mongoDB数据库存储。

安装项目依赖：npm install

2020.8.11，第二版：使用mongodb数据库替换json文件存储；并使用了第三方mongoose模块；第二版中`db.json、students-fs.js`已经不需要。(测试时注意：较高版本的MongoDB数据库不支持win7，此项目使用了v4.0.19版本)
相关文档参考：
https://blog.csdn.net/zhangank/article/details/107306452