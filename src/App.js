import React, { Component } from "react";
import "./App.css";
//import Accordion from 'react-bootstrap/Accordion';
//import {Button} from "antd";
//I am sorry, cannot figure out how to expand for multiple student and part 5

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			'items':[],
			inVal:'',
			OutVal:'',
			showElem:false,
			id:'',
			intag:'',
			tagVal:'',
			tagid:0,
			finalTag:'',
		}
	}

//fetch data
async componentDidMount(){
		const url = "https://www.hatchways.io/api/assessment/students";
		const response =await fetch(url);
		const data = await response.json();
		
		
		
		this.setState({items: data.students})
}

toggle=(event)=>{
	this.setState({showElem:!this.state.showElem});
	this.setState({id:event.target.id});
};

inputTagSubmit=(e)=>{
	this.setState({finalTag:e.target.value,tagid:e.target.id,tagVal:e.target.value});
}

inputTag=(e)=>{
	this.setState({tagVal:e.target.value,tagid:e.target.id});
}

//default original data output
output(){
 const userList=[];
 let tagval=this.state.finalTag;
 const User = ({fname,lname,pic,email,company,skill,average,grades,num,tagdata}) => (
 <div>
	<table><tr><td width='200'>
	<img class='circleImg' src={pic}/>
	</td><td width='500'>
    <h1 class="name">{fname} {lname}</h1>
	<p class='info'>Email: {email}</p>
	<p class='info'>Compnay: {company}</p>
	<p class='info'>Skill: {skill}</p>
	<p class='info'>Average: {average}%</p>
	</td>
	<td>
	<button class='expand-btn' id={num} onClick={this.toggle.bind(this)}>{parseInt(this.state.id)==parseInt(num)&&this.state.showElem?"hide":"expand"}</button>
	</td>
	</tr>
	</table>
	<table>
	<tr><td width='250'></td><td width='300'>
		<p class='tests'>{parseInt(this.state.id)==parseInt(num)&&this.state.showElem?(
		<div class='show'>
		{grades.map((sub,index)=><p>Test {index+1}: {sub}%</p>)}
		</div>
		):(<div class='notshow'></div>)}</p>	
		
	<p class='input'>{parseInt(this.state.id)==parseInt(num)&&this.state.showElem?(
	<div>
		<div>
			<p>{parseInt(this.state.tagid)==parseInt(num)?(<div>{tagdata}</div>):(
			<p></p>
			)}
			</p>
		</div>
	<div>
	<form id={num} onSubmit={this.inputTagSubmit}>
	<label>
	<input type='text' class='add-tag-input​' id={num} placeholder='Add a tag' value={this.state.tagVal} onChange={this.inputTag} />
	</label>
	<input type="submit" id={num} value="Submit"/>
	</form>
	<hr class="tagline" align='left' width='100' color='#AFAFAF' SIZE=''/>
	</div>
	</div>
	):(<div class='notshow'></div>)}</p>
	</td></tr>
	</table>
	<hr align='center' width='785' color='#AFAFAF' SIZE='1'/>
	
  </div>
);

/*<p class='tests' id='{num}'>{grades.map((sub,index)=><p>Test {index+1}:  {sub}%</p>)}</p>*/
	for(let i = 0; i < this.state.items.length; i++) {
        let fname =  this.state.items[i].firstName;
		let lname =  this.state.items[i].lastName;
		let pic = this.state.items[i].pic;
        let company=this.state.items[i].company;
        let email = this.state.items[i].email;
		let skill=this.state.items[i].skill;
		var sum=0;
		let grades=this.state.items[i].grades;
		for (var j=0;j<parseInt(this.state.items[i].grades.length);j++){
			sum+=parseInt(this.state.items[i].grades[j]);
		}
		let avg=sum/parseInt(this.state.items[i].grades.length);
		
        userList.push(<User fname={fname} lname={lname} pic={pic} email={email} company={company} skill={skill} average={avg} grades={grades} num={i+1} tagdata={tagval}/>);
    }
	return userList;
}

//track input changes
change(e){
	this.setState({inVal:e.target.value.toLowerCase()})
}

changetag(e){
	this.setState({intag:e.target.value.toLowerCase()})
}

//search output
Outsearch(){
	var intag=this.state.intag;
	var inputData=this.state.inVal;
	let userList=[];
	const User = ({fname,lname,pic,email,company,skill,average,grades,num,tagdata}) => (
	<div>
	<table><tr><td width='200'>
	<img class='circleImg' src={pic}/>
	</td><td width='500'>
    <h1 class="name">{fname} {lname}</h1>
	<p class='info'>Email: {email}</p>
	<p class='info'>Compnay: {company}</p>
	<p class='info'>Skill: {skill}</p>
	<p class='info'>Average: {average}%</p>
	</td>
	<td>
	<button class='expand-btn' id={num} onClick={this.toggle.bind(this)}>{parseInt(this.state.id)==parseInt(num)&&this.state.showElem?"hide":"expand"}</button>
	</td>
	</tr>
	</table>
	<table>
	<tr><td width='250'></td><td width='300'>
		<p class='tests'>{parseInt(this.state.id)==parseInt(num)&&this.state.showElem?(
		<div class='show'>
		{grades.map((sub,index)=><p>Test {index+1}: {sub}%</p>)}
		</div>
		):(<div class='notshow'></div>)}</p>
		
		<p class='input'>{parseInt(this.state.id)==parseInt(num)&&this.state.showElem?(
	<div>
		<div>
			<p>{parseInt(this.state.tagid)==parseInt(num)?(<div>{tagdata}</div>):(
			<p></p>
			)}
			</p>
		</div>
	<div>
	<form id={num} onSubmit={this.inputTagSubmit}>
	<label>
	<input type='text' class='add-tag-input​' id={num} placeholder='Add a tag' value={this.state.tagVal} onChange={this.inputTag} />
	</label>
	<input type="submit" id={num} value="Submit"/>
	</form>
	<hr class="tagline" align='left' width='100' color='#AFAFAF' SIZE=''/>
	</div>
	</div>
	):(<div class='notshow'></div>)}</p>
		
		</td>
	</tr>
	</table>
	<hr align='center' width='785' color='#AFAFAF' SIZE='1'/>
	</div>
	);
	if(intag==''){
	for(let i = 0; i < this.state.items.length; i++) {
		let fname =  this.state.items[i].firstName.toLowerCase();
		let lname =  this.state.items[i].lastName.toLowerCase();
		if(lname.match(inputData)||fname.match(inputData)){
		let pic = this.state.items[i].pic;
        let company=this.state.items[i].company;
        let email = this.state.items[i].email;
		let skill=this.state.items[i].skill;
		let grades=this.state.items[i].grades;
		var sum=0;
		for (var j=0;j<parseInt(this.state.items[i].grades.length);j++){
			sum+=parseInt(this.state.items[i].grades[j]);
		}
		let avg=sum/parseInt(this.state.items[i].grades.length);
		
		userList.push(<User fname={fname} lname={lname} pic={pic} email={email} company={company} skill={skill} average={avg} grades={grades} num={i+1}/>);
		}
	}
	}
	return userList;
}


render(){
	return (<div>
	<div class="bar"> <input type='text' id='name-input' placeholder='Search by name' onChange={this.change.bind(this)}/> <hr align='center' width='765' color='#AFAFAF' SIZE='1'/></div>
	<div class="bar"> <input type='text' id='tag-input' placeholder='Search by tag' onChange={this.changetag.bind(this)}/> <hr align='center' width='765' color='#AFAFAF' SIZE='1'/></div>
	
	{this.state.inVal||this.state.intag?(
	<div> <p>{this.Outsearch()}</p> </div>
	):(<div>{this.output()}</div>)}
	</div>
	
	);
}
}
export default App;
