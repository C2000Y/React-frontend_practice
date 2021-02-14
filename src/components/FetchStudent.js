import React from "react";


export default class FetchStudent extends React.Component {
	
	state ={
		loading: true,
		student: null,
		average: 0,
		txt: null,
	}
	
async componentDidMount(){
		const url = "https://www.hatchways.io/api/assessment/students";
		const response =await fetch(url);
		const data = await response.json();
		let text='';
		
		for (var i=0;i<parseInt(data.students.length);i++){
			var sum=0;
			for(var j=0;j<parseInt(data.students[i].grades.length);j++){
				sum+=parseInt(data.students[i].grades[j]);
			}
			var avg=sum/parseInt(data.students[1].grades.length);
			
			text+="<table><tr><td width=200><div class='pic'><img class='circleImg'src="+data.students[i].pic+"></img></div></td>"+
				"<td><div class='txt'><h1 class='name'>"+data.students[i].firstName+" "+data.students[i].lastName+"</h1>"+
				"<p class='info'>Email: "+data.students[i].email+"</p>"+
				"<p class='info'>Company: "+data.students[i].company+"</p>"+
				"<p class='info'>Skill: "+data.students[i].skill+"</p>"+
				"<p class='info'>Average: "+avg+"%</p></div><td></tr></table><p><hr><p>";
				
		}

		this.setState({student: data.students,loading:false,average:avg,txt:text});
		
	}
	
	componentDidUpdate() {
    document.getElementById("root").innerHTML =this.state.txt;
  }
	
	render(){
		
		return (
		<div>
		{this.state.loading || !this.state.student ? (
		<div> loading...</div>
		): (
		<div>
		</div>
		)}
		</div>
		);
}
}
