
window.onscroll = function() {stickyHead()};

function aboutBox()
{
	ab = document.getElementById('about');
	ab.style.display = 'block';
	document.getElementById('header').style.height = '250px';
	var elmntToView = document.getElementById("about");
	elmntToView.scrollIntoView(); 
}

function eduBox()
{
	ed = document.getElementById('edu');
	ed.style.display = 'block';
	var elmntToView = document.getElementById("edu");
	elmntToView.scrollIntoView(); 
}

function projBox()
{
	pj = document.getElementById('project');
	pj.style.display = 'block';
	var elmntToView = document.getElementById("project");
	elmntToView.scrollIntoView(); 
}

function certBox()
{
	ct = document.getElementById('certificates');
	ct.style.display = 'block';
	var elmntToView = document.getElementById("certificates");
	elmntToView.scrollIntoView(); 
}

function pubBox()
{
	pb = document.getElementById('pub');
	pb.style.display = 'block';
	var elmntToView = document.getElementById("pub");
	elmntToView.scrollIntoView(); 
}

function intBox()
{
	it = document.getElementById('interests');
	it.style.display = 'block';
	var elmntToView = document.getElementById("interests");
	elmntToView.scrollIntoView(); 
}

function contBox()
{
	ct = document.getElementById('contact');
	ct.style.display = 'block';
	var elmntToView = document.getElementById("contact");
	elmntToView.scrollIntoView(); 
}

function skillBox()
{
	sk = document.getElementById('skills');
	sk.style.display = 'block';
	var elmntToView = document.getElementById("skills");
	elmntToView.scrollIntoView(); 
}
