const Library=require('../models/library');
const returnbooks=require('../models/returnedbooks.js');
exports.getbooks=(req,res,next)=>{
       
 Library.findAll()
 .then(data=>{
    console.log(data)
    res.json(data)
 })

     
}

exports.postbook=(req,res,next)=>{

    const bookname=req.body.bookname;
    const booktakentime=req.body.booktakentime;
    const returnbooktime=req.body.returnbooktime;
    const fees=req.body.fees;
    

    const ondate=new Date(booktakentime)
    const ondateist=ondate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
    console.log(ondateist);
   
    const duedateist=new Date(returnbooktime).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });


    console.log(bookname,booktakentime,returnbooktime,fees)
    Library.create({

        bookname:bookname,
        booktakentime:ondateist,
        returnbooktime:duedateist,
        fees:fees
    })
    .then(data=>{
        res.json(data)
    })

      
}

exports.returnbook=(req,res,next)=>{
    console.log('hello')
        const currenttime=new Date()
        
        const id=req.params.bookid;
        console.log(id)
        Library.findByPk(id)
        .then(data=>{
           return data.destroy()
        })
        .then(data=>{
            console.log(data.returnbooktime,'data')
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postreturnbooks=(req,res,next)=>{
    const bookname=req.body.bookname;
    var  fees=req.body.fees;
    const returnbooktime=req.body.returnbooktime;
    console.log(returnbooktime,'returntime');
    const presenttime=new Date();
    // Define the start and end times using Date objects
console.log(returnbooktime)
  var startTime=new Date(returnbooktime)
  var endTime = new Date(presenttime);
  console.log(startTime,'starttime')
  console.log(endTime,'endtime');

// Calculate the difference in milliseconds
    var differenceInMilliseconds = endTime - startTime;

// Convert milliseconds to hours and round the result
var differenceInHours = Math.round(differenceInMilliseconds / (1000 * 60 * 60));

console.log("Difference in hours:", differenceInHours);

    if(endTime>startTime){
        fees=differenceInHours*60
    }
    console.log(fees,bookname)
    returnbooks.create({
        bookname:bookname,
        fees:fees,
        returneddate:presenttime.toLocaleString('en-US',{timeZone:'Asia/Kolkata'})
    })
    .then(data=>{
        console.log(data);
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.getreturnbooks=(req,res,next)=>{
      returnbooks.findAll()
      .then(data=>{
        res.json(data)
      })
}

