const express=require('express');

const bodyParser=require('body-parser')

const sequelize=require('./util/database');

const bookroute=require('./routes/book')

const slotroute=require('./routes/slotTable');

const Slotbtn=require('./models/slotbtn');

const Slottable=require('./models/slottable');

const libraryroutes=require('./routes/library');






const path=require('path')
const rootDir=require('./util/path');
const cors=require('cors')
const app=express();
app.use(cors());
app.use(bodyParser.json({extended:false}));


Slotbtn.hasMany(Slottable);
Slottable.belongsTo(Slotbtn);

app.use(slotroute);
app.use(bookroute);
app.use(libraryroutes);


sequelize.sync({force:true})
.then(result=>{
    app.listen(3000);
});

