const model = require('../module/module')

const ins = async(req,res) =>{
  let id = req.body.user
  let data = req.body
   if(id!=''){
     result = await model.findByIdAndUpdate(id,req.body)
  }else{
      result = await model.create(data);  
  }
   if(result){
    res.redirect('/')
   }
}

const disp = async (req, res) => {
    const result = await model.find();
    res.render('form', {
      dispdata: result,
      editdata: ''
    });
 
};

const delData = async(req,res)=>{
let id = req.params.id
let result = await model.findByIdAndDelete(id)
if(result){
  res.redirect('/')
}
}


const usereditData = async(req,res)=>{
  let id = req.params.id
  let editdata = await model.findById(id)
  console.log(editdata)
  const result = await model.find();
    res.render('form', {
      dispdata: result,
      editdata:editdata 
    });

}

module.exports = {ins,disp,delData,usereditData}