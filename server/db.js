const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shop-mall');

const db = mongoose.connection;

db.on('error',(error)=>{console.log('Mongo connection error'+error)})
db.once('open',()=>{console.log('Mongo connection successed')})

const loginSchema = mongoose.Schema({
    name:String,
    password:String
})
/* 导航 */
const menusSchema = mongoose.Schema({
    name:String,
    type:String,
    child:Array
})
/* 有格调 */
const goodsSchema = mongoose.Schema({
    name:String,
    photo:String,
    price:String,
    coordinate:String,
    dizhi:String,
    dh:String
})
/* 电影 */
const moviesSchema = mongoose.Schema({
    name:String,
    photo:String,
    film:String
})
const groomsSchema = mongoose.Schema({
    name:String,
    living:String,
    price:String
})
const gwcsSchema = mongoose.Schema({
    customer:String,
    name:String,
    photo:String,
    price:String,
})

const Models = {
    Login:mongoose.model('users',loginSchema),
    Menus:mongoose.model('menus',menusSchema),
    Goods:mongoose.model('goods',goodsSchema),
    Movies:mongoose.model('movies',moviesSchema),
    Grooms:mongoose.model('grooms',groomsSchema),
    Gwcs:mongoose.model('gwcs',gwcsSchema),
}

module.exports = Models