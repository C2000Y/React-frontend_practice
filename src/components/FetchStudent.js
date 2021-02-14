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
			
			text+="<div class='pic'><img class='circleImg' src="+data.students[i].pic+"></img></div>"+
				"<div class='txt'><b>"+data.students[i].firstName+" "+data.students[i].lastName+"</b>"+
				"<p>Email: "+data.students[i].email+"</p>"+
				"<p>Company: "+data.students[i].company+"</p>"+
				"<p>Skill: "+data.students[i].skill+"</p>"+
				"<p>Average: "+avg+"%</p></div>";
				
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
