const database = 	[
	{
		header: "Computer Vision and Graphics",
		projects: [
			{
				image: "images\\examplegeometrymap.png",
				title: "Saliency in 3D Environment",
				summary: "Exploring low-level saliency in virtual environments during a search task.",
				overview: "",
				tags: "Tobii EyeX, Unity, C++, OpenCV, OpenGL"			
			},
			{
				image: "images\\volumvis.png",
				title: "3D Volume Visualisation using Ray Tracing",
				summary: "Visualisation of volume data using ray tracing rendering and uniform sampling.",
				overview: "",
				tags: "C++, Pthreads, OpenGL"			
			},
			{
				image: "images\\raytracing.png",
				title: "Ray Tracing",
				summary: "Ray Tracer rendering technique. All objects are declared in a mathematical format.",
				overview: "",
				tags: "C++, Pthreads, OpenGL, GLM"			
			},
			{
				image: "images\\tracking.png",
				title: "Multiple Object Tracking",
				summary: "Identify and track a set of objects across frames.",
				overview: "",
				tags: "Matlab"			
			},
			{
				image: "images\\DWA.png",
				title: "Image Processing",
				summary: "Application of some basic filters is explored, as well as a stitching technique for panoramic compostition.",
				overview: "",
				tags: "Python, UG Final Year Project"			
			}
		]
	},
	{
		header: "Computer Games",
		projects: [
			{
				image: "images\\boulder.png",
				title: "Boulder Bypasser",
				summary: "Semi 3D flight game. Fly inside a procedurally generated cave. Pass throught waypoints and avoid obstacles.",
				overview: "",
				tags: "Unity, 3DS Max"			
			},
			{
				image: "images\\spaceretr.png",
				title: "Space Retributor",
				summary: "2D arcade space shooter. Fight your way through enemies of increasing difficulty and their end-game boss.",
				overview: "",
				tags: "Unity"			
			},
			{
				image: "images\\ballrunner.png",
				title: "Ball Runner",
				summary: "A platform-runner mini game with simplistic graphics and procedurally generated level.",
				overview: "",
				tags: "Unity"			
			}
		]
	},
	{
		header: "Other",
		projects: [
			{
				image: "images\\calendar.png",
				title: "Calendar based Scheduler",
				summary: "A scheduler created for a museum to hold the guided tours and generate weekly and semester reports.",
				overview: "",
				tags: "Unity"	
			},
			{
				image: "images\\robot.png",
				title: "Automated Resoure Retrieval with Mobile Robots",
				summary: "Robotics group project with aim of constructing an autonomous robot for navigating in an arena, searching the specified resources and retrieving them back to the base.",
				overview: "",
				tags: "C++, Pthreads, Phidget, Lego"			
			},
			{
				image: "images\\NN.png",
				title: "Neural Network and Genetic Algorithm",
				summary: "Construction of Neural Network to learn two function outputs with single input and optimisation of hidden layer by a genetic algorithm.",
				overview: "",
				tags: "C++"			
			}
		]
	}
]

const createProjectCard = (project) => {
	let card = document.createElement("div");
	card.className = "card";
	card.style.width = "18rem";

	let img = document.createElement("img");
	img.className = "card-img-top";
	img.src = project.image;
	img.alt = project.image;

	let cardBody = document.createElement("div");
	cardBody.className = "card-body project-card-body";

	let header = document.createElement("h5");
	header.className = "card-title";
	header.appendChild(document.createTextNode(project.title));

	let cardText = document.createElement("p");
	cardText.className = "card-text";

	let summary = document.createElement("p");
	summary.appendChild(document.createTextNode(project.summary));

	let tags = document.createElement("p");
	tags.className = "tags";
	tags.appendChild(document.createTextNode(`Tags: ${project.tags}`));

	let button = document.createElement("a");
	button.href = "";
	button.className = "btn btn-primary";
	button.appendChild(document.createTextNode("Learn More"));

	cardText.appendChild(summary);
	cardText.appendChild(tags);
	cardBody.appendChild(header)
	cardBody.appendChild(cardText);
	cardBody.appendChild(button);
	card.appendChild(img);
	card.appendChild(cardBody);
	return card;
}

const createProjectClass = (o, n = 0, b = false) => {
	let card = document.createElement("div");
	card.className = "card-header";
	card.id = `heading${n}`;

	let header = document.createElement("h5");
	header.className = "mb-0";

	let button = document.createElement("button");
	button.className = "btn btn-link";
	button.setAttribute("data-toggle", "collapse");
	button.setAttribute("data-target", "#collapse"+n);
	button.setAttribute("aria-expanded", b?"true":"fale");
	button.setAttribute("aria-collapse", `collapse${n}`);

	let headerText = document.createElement("p");
	headerText.className = "collapse-header";
	headerText.appendChild(document.createTextNode(o.header));

	button.appendChild(headerText);
	header.appendChild(button);
	card.appendChild(header);

	let collapse = document.createElement("div");
	collapse.id = `collapse${n}`;
	collapse.className = b?"collapse show":"collapse";
	collapse.setAttribute("aria-labelledby", card.id);
	collapse.setAttribute("data-parent", "#accordionExample");

	let container = document.createElement("div");
	container.style.display = "flex";
	container.style.flexWrap = "wrap";
	for(i = 0; i < o.projects.length; i++){
		container.appendChild(createProjectCard(o.projects[i]));
	}
	collapse.appendChild(container);

	return [card, collapse];
}

const showProjects = () =>{
	let element = document.getElementById("projects")
	for(p = 0; p < database.length; p++){
		let r =createProjectClass(database[p], p, p===0);
		element.appendChild(r[0]);
		element.appendChild(r[1]);
	}
}
