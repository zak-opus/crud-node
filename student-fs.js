// 对学生数据的操作，不是与页面打交道的
var fs = require('fs')
var dbPath = './db.json'

/* 通过id获取学生数据，返回学生对象 */
exports.findById = function(id,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    var stu = students.find(function(item){
      return item.id == id
    })
    callback(null,stu)
  })
}

/* 获取学生数据，返回数组[] */
exports.find = function(callback){
  fs.readFile(dbPath,function(err,data){
    if(err){
      return callback(err)
    }
    callback(null,JSON.parse(data).students)
  })
}

/* 添加保存学生数据 */
exports.save = function(student,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    student.id = students[students.length-1].id+1
    students.push(student)
    var newData = { "students":students }
    fs.writeFile('db.json',JSON.stringify(newData),function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}

/* 更新学生数据 */
exports.update = function(student,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    // console.log(student);
    student.id = parseInt(student.id)
    var stu = students.find(function(item){
      return item.id == student.id
    })
    // console.log(stu);
    for(var key in student){
      stu[key] = student[key]
    }
    var newData = { "students":students }
    fs.writeFile('db.json',JSON.stringify(newData),function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}

/* 删除学生数据 */
exports.deleteById = function(id,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    var delId = students.findIndex(function(item){
      return item.id == parseInt(id)
    })
    students.splice(delId,1)
    var newData = { "students":students }
    fs.writeFile('db.json',JSON.stringify(newData),function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    })
  })
}