const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Library=sequelize.define('library',{
    id:{
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allownull:false,
      
    },
    bookname:{
        type:Sequelize.STRING,
        allownull:false
    },
    returnbooktime:{
      type:Sequelize.STRING,
      allownull:false
    },
    booktakentime:{
      type:Sequelize.STRING,
      allownull:false
    },
    fees:Sequelize.INTEGER
    
  },{
    timestamps:false
  });
  
  module.exports=Library;