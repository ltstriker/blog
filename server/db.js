// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test1');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const userSchema = mongoose.Schema({
  username : String,
  id : String,
  password : String,
  email : String,
  phone : String,
  signed : Boolean,
  signTime : String
});

const blogSchema = mongoose.Schema({
  title : String,
  content : String,
  author : String,
  lastedit : String,
  comments : Array,
  totalComment : Number
});

/************** 定义模型Model **************/
const Models = {
    User : mongoose.model('User', userSchema),
    Blog : mongoose.model('Blog', blogSchema)
}

module.exports = Models;
