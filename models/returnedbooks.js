const Sequelize=require('sequelize');
const sequelize=require('../util/database');


const Returnbooks=sequelize.define('returnbooks',{
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
    fees:Sequelize.INTEGER,
    returneddate:{
      type:Sequelize.STRING
    }
    
  },{
    timestamps:false
  });
  
  module.exports=Returnbooks;