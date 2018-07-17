const projArr = [
	{
		"name" : "React-Redux Calculator",
		"tech" : "HTML/CSS/React/Redux",
		"link" : 'https://nrpy078n7l.codesandbox.io/',
		"pic" : 'calc.png',
		"desc" : "Javascript calculator built using React and Redux"
	},
	{
		"name" : "Daft Punk Machine",
		"tech" : "HTML/CSS/React",
		"link" : 'https://codepen.io/nathan-williams/full/XYvZGE/',
		"pic" : 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1952703.XYvZGE.small.8ed52635-d54f-450b-8710-2207d0f45b33.png',
		"desc" : "A fun Daft Punk themed drum machine built using React"
	},
	{
		"name" : "Pomodoro Clock",
		"tech" : "HTML/CSS/React",
		"link" : 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1952703.GGepoG.small.28f1ad47-eb19-41d1-957d-afb9b1c61580.png',
		"pic" : 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1952703.GGepoG.small.28f1ad47-eb19-41d1-957d-afb9b1c61580.png',
		"desc" : "Pomodoro Clock application built using React"
	},
	{
		"name" : "Twitch Viewer",
		"tech" : "HTML/CSS/Jquery",
		"link" : 'https://codepen.io/nathan-williams/full/zjQwxB/',
		"pic" : 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1952703.zjQwxB.small.c16bd07b-a3ad-40d8-a706-e9590ecb6c7f.png',
		"desc" : "Web-app used to monitor Twitch streamers status built using Jquery"
	},
	{
		"name" : "D3 Scatter Plot",
		"tech" : "HTML/CSS/D3",
		"link" : 'https://codepen.io/nathan-williams/full/JBPNoJ/',
		"pic" : 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1952703.JBPNoJ.small.35035d98-073a-47aa-b459-e11e1e9ca592.png',
		"desc" : "D3 scatter plot showing data regarding doping in cycling"
	},
	{
		"name" : "Markdown Previewer",
		"tech" : "HTML/CSS/React",
		"link" : 'https://codepen.io/nathan-williams/full/VdrKoW/',
		"pic" : 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1952703.VdrKoW.small.70fc7d62-88f7-4959-b5d5-e7d93e6495bd.png',
		"desc" : "Markdown previewer app built using React"
	}
]
const projPrinter = (projs) => {
	let htmlArr = [];
	//for each proj
	for (let i = 0; i < projs.length; i++){
		let html = '';
		html += '<div class="projCell"><a href='+projs[i].link+' target="_blank"><img src=' + projs[i].pic + ' class="thumb"></a><div class="overlay"><div class="text"><a href='+projs[i].link+' target="_blank">View Project</a></div></div><a href='+projs[i].link+' target="_blank"><h3 class="projName">'+projs[i].name+'</h3></a><h4>'+projs[i].tech+'</h4></div>';
		htmlArr.push(html);
	}
	let htmlStr = htmlArr.join('');
	return htmlStr;
}

$(document).ready(function() {
	//add projs
	let projStr = projPrinter(projArr);
	$('.projGrid').html(projStr);
	//activate buttons
	$("#homeButt").click(function() {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#pageTop").offset().top
			},
			1000
		);
	});
	$("#projButt").click(function() {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#projSect").offset().top
			},
			1000
		);
	});
	$("#contButt").click(function() {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#contSect").offset().top
			},
			1000
		);
	});
	$("#arrow").click(function() {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#projSect").offset().top
			},
			1000
		);
	});
});
