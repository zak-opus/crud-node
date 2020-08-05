var fs = require('fs')
var express = require('express')
var Student = require('./student')
var router = express.Router()

router.get('/',function(req,res){
  res.redirect('/students')
})
// 获取学生数据页面,处理学生数据
router.get('/students',function(req,res){
  Student.find(function(err,students){
    if(err){
      return res.status(500).send('server err')
    }
    res.render('index.html',{
      fruits:[
        '苹果',
        '香蕉',
        '橘子',
        '水果'
      ],
      students:students
    })
  })
})
// 添加学生数据页面
router.get('/students/new',function(req,res){
  res.render('new.html')
})
// 添加数据
router.post('/students/new',function(req,res){
  Student.save(req.body,function(err){
    if(err){
      res.status(500).send('server err')
    }
    console.log('添加成功');
    res.redirect('/students')
  })
})
// 编辑学生数据页面
router.get('/students/edit',function(req,res){
  // 通过id获取数据，渲染到模板页
  Student.findById(parseInt(req.query.id),function(err,student){
    if(err){
      res.status(500).send('server err')
    }
    res.render('edit.html',{
      student:student
    })
  })
})
// 保存编辑后的学生数据
router.post('/students/edit',function(req,res){
  Student.update(req.body,function(err){
    if(err){
      res.status(500).send('server err')
    }
    res.redirect('/students')
  })
})
// 删除学生数据
router.get('/students/delete',function(req,res){
  Student.deleteById(req.query.id,function(err){
    if(err){
      res.status(500).send('server err')
    }
    res.redirect('/students')
  })
})

module.exports = router
