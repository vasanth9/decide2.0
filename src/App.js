import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [ans,setAns]=useState("not decided");
  const [name,setName]=useState('');const [name1,setName1]=useState('');const [name2,setName2]=useState('');const [name3,setName3]=useState('');
  const [name4,setName4]=useState('');const [name5,setName5]=useState('');const [name6,setName6]=useState('');
  const [name7,setName7]=useState(0);
  function handleChange(evt){
   setName(evt.target.value);
  }
  function handleChange1(evt){
    setName1(evt.target.value);
   }
   function handleChange2(evt){
    setName2(evt.target.value);
   }
   function handleChange3(evt){
    setName3(evt.target.value);
   }
   function handleChange4(evt){
    setName4(evt.target.value);
   }
   function handleChange5(evt){
    setName5(evt.target.value);
   }
   function handleChange6(evt){
    setName6(evt.target.value);
   }
   function submit(evt){
    evt.preventDefault();
    const array=[];
    if(name1.length>0){array.push(name1)}
    if(name2.length>0){array.push(name2)}
    if(name3.length>0){array.push(name3)}
    if(name4.length>0){array.push(name4)}
    if(name5.length>0){array.push(name5)}
    if(name6.length>0){array.push(name6)}

    const size=array.length;
    if(size>0){
    const index=Math.floor(Math.random() * (size ))+1;
    console.log(array[index-1],index)
     setAns(array[index-1])
     
     setName7(1);
    }
   }
   function cancel(evt){
    evt.preventDefault();
    setName7(0);

    setAns("Not Decided yet.")
    
   }
   if(name7===0){
  return(
    
    <div className="container col">
      <br/> <br/>
    <h1 className="text-center">Decide Anything</h1>
    <br/> <br/>
    <form>
      <label>What is your Question...?</label>
      <br/>
    <input className="form-control" onChange={handleChange} value={name}/>
    <br/>
    <label>List your major options.....</label>
    <div className="container row ">
    <input className="col-5"onChange={handleChange1} value={name1}/>
    <span className="col-2"></span>
    <input className="col-5" onChange={handleChange2} value={name2}/>
    </div>
    <br/>
    <div className="container row">
    <input className="col-5" onChange={handleChange3} value={name3}/>
    <span className="col-2"></span>
    <input  className="col-5" onChange={handleChange4} value={name4}/>
    </div>
    <br/>
    <div className="container row">
    <input className="col-5" onChange={handleChange5} value={name5}/>
    <span className="col-2"></span>
    <input  className="col-5" onChange={handleChange6} value={name6}/>
    </div>
    <br/>
    <div className="container row">
    <span className="col-4"></span>
    <button type="submit" value="submit" onClick={submit}className=" form-control btn-center btn-success col-4">Submit</button>
    </div>
    </form>
    </div>
  );}
  else
  {
    return(
      <div className="container ">
       <br/><br/><br/><br/>

        <h1 className="text-success text-center">
        {ans}
        </h1>
        <br/><br/>
        <div className="container row">
          <span className="col-4"></span>
        <button  onClick={cancel}className=" form-control center btn-info col-4">Cancel</button>

        </div>
      </div>
     
    );
  }
}

export default App;
