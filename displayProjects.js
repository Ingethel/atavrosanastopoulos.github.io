const database = [
	{
		header: "Computer Vision and Graphics",
		projects: [
			{
				image: "images\\examplegeometrymap.png",
				image2: "images\\examplegeometrymapFull.png",
				title: "Saliency in 3D Environment",
				summary: "Exploring low-level saliency in virtual environments during a search task.",
				overview: `<p>Exploring low-level saliency in virtual environments during a search task. 
				The 3D environment was created in Unity using a random dungeon generation asset. 
				The play-through and other relevant information such as character position and rotation in each frame were recorded, as well as the gaze points which were extracted using a Tobii EyeX tracker with the provided Unity SDK.</p>
				<p>The information was then processed with OpenCV in terms of low-level (pixel) saliency and the environment was recreated using OpenGL for visualisation. 
				Frames were processed in terms of their salient features using a variety of low-level salient algorithms, such as the 
				<a href="http://www.klab.caltech.edu/~xhou/papers/cvpr07.pdf">Spectral Residual Map of Hou and Zhang</a>
				where an example implementation is available built-in the OpenCV(3+) library.</p>
				<p>The salient points gathered throughout the play-through were filtered to minimise duplicates. 
				They were then evaluated in terms of attendance using a 3D heatmap created from the player's gaze points.</p>`,
				tags: "Tobii EyeX, Unity, C++, OpenCV, OpenGL"
			},
			{
				image: "images\\volumvis.png",
				image2: "images\\volumvisFull.png",
				title: "3D Volume Visualisation using Ray Tracing",
				summary: "Visualisation of volume data using ray tracing rendering and uniform sampling.",
				overview: `<p>Visualisation of volume data using the ray tracing rendering technique and uniform sampling.
				The data was first expressed in the world as a box with 6 planes, on which we cast rays. 
				Upon verifying a hit we recursed on that ray with a uniform step which was calculated by the angle of the ray with the plane. 
				Respective 3D points were then converted into intensity values from our data according to nearest-neighbor or trilinear sampling. 
				The recursion stops when the point is no longer valid.</p>
				<p>We used OpenGL for rendering the output as a set of 2D points and Pthreads for acceleration.
				Current set-up: 500x500 resolution/ 256x256x100 datasize/ 8 threads runs approximately 0.1-0.3 seconds with NN or 0.5-0.7 seconds with trilinear interpolation. 
				Running time depends on the face and distance that we are looking (number of rays that represent data).</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/VolumeVisualisation">here.</a></p>`,
				tags: "C++, Pthreads, OpenGL"
			},
			{
				image: "images\\raytracing.png",
				image2: "images\\raytracing.png",
				title: "Ray Tracing",
				summary: "Ray Tracer rendering technique. All objects are declared in a mathematical format.",
				overview: `<p>Ray Tracer example written in C++ using OpenGL for rendering the output, GLM for matrix and vector operations and Pthreads for some speed-up. 
				Contains a scene with primitive objects (sphere/plane/triangle). 
				The objects are declared in a mathematical format (no mesh readers/handlers) and the lighting follows the standard Ambient/Diffuse/Specular lighting with light attenuation and normal shadows. 
				The materials can vary as: Normal, Reflective, Refractive.</p>
				<p>Currently it runs in ~1 second on 4 threads in a scene 640x480 with 125 objects.</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/raytracer">here.</a></p>`,
				tags: "C++, Pthreads, OpenGL, GLM"
			},
			{
				image: "images\\tracking.png",
				image2: "images\\trackingFull.png",
				title: "Multiple Object Tracking",
				summary: "Identify and track a set of objects across frames.",
				overview: `<p>The objective was to identify and track a set of balls across frames, having a total of 10 balls varied across 3 colors. 
				Having an almost stationary background, we extract the different balls using background subtraction and we further process the image with morphological operators and color information to erase noise and keep the individual spheres. 
				For tracking we used the Condensation tracker to encode dynamics and produce plausible future locations and Kalman filter for their evaluation. 
				The "observed" values came from a naive approach of comparing relative positions, sizes and histograms across frames. 
				Overall the tracking was about 75% accurate across frames, however it was prone to errors when there were more than one balls of the same color in the same area.</p>`,
				tags: "Matlab"
			},
			{
				image: "images\\DWA.png",
				image2: "images\\DWA.png",
				title: "Image Processing",
				summary: "Application of some basic filters is explored, as well as a stitching technique for panoramic compostition.",
				overview: `<p>Python code demonstrating an horizontal panoramic composition technique. 
				The algorithm takes consecutive images and finds a best merging point based on the difference of pixel columns. 
				Then by merging horizontally and processing the overlap area, by dynamically assigning weights, it creates a smooth transition between the images. 
				The effect of various filters has also been explored, such as Gaussian and Median smoothing and Sobel edges.</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/ImProc">here.</a></p>`,
				tags: "Python, UG Final Year Project"
			}
		]
	},
	{
		header: "Computer Games",
		projects: [
			{
				image: "images\\boulder.png",
				image2: "images\\boulder.png",
				title: "Boulder Bypasser",
				summary: "Semi 3D flight game. Fly inside a procedurally generated cave. Pass throught waypoints and avoid obstacles.",
				overview: `<p>Semi-3D Flight game.</p>
				<p>The player is given control of a spaceship inside a cave and he has to progress through it, avoid obstacles and pass through the way-points to increase his score and speed. 
				A custom character controller gives the initial feel that was envisioned and then some minor options allow the player to adjust to his preferences. 
				These include input (touch or accelerometer), adjusting the sensitivity, the character transparency or even changing the view point.</p>
				<p>Objects are low polygon made in 3DS MAX, simple enough to serve their purpose. 
				In-game they are being generated using a clustering algorithm to determine their initial position, size and speed. 
				Unity's standard assets for cell shading fitted perfectly with the atmosphere and low polygon objects achieving simple cartoon graphics.</p>
				<p>Procedural mesh generation and editing gives the feeling of movement through the cave. 
				Using a single chunk of terrain which is continuously altered using Perlin noise, the cave is continuously updated based on player's speed. 
				The mesh points are being modified using Compute Shaders where supported, otherwise the terrain is split in four parts and use the standard .Net threads, achieving real-time update of both the mesh and its collider.</p> 
				<p>The game is for android and freely available on <a href="https://play.google.com/store/apps/details?id=com.TheMisku.BoulderBypasser">Google Play</a>.</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Boulder-Bypasser">here.</a></p>`,
				tags: "Unity, 3DS Max"
			},
			{
				image: "images\\spaceretr.png",
				image2: "images\\spaceretrFull.png",
				title: "Space Retributor",
				summary: "2D arcade space shooter. Fight your way through enemies of increasing difficulty and their end-game boss.",
				overview: `<p>A 2D arcade, space shooter game.</p>
				<p>The main enemies are divided into three different categories with different behaviors such as focusing the user for period of time or avoiding his attacks. 
				The different categories are labeled with different level of difficulty and their spawn chance changes depending on how the user's score progresses. 
				A boss fight is also available after the player reaches a certain score. 
				On enemy death there is a chance for a power-up to spawn. 
				These are also divided into three categories as health replenishment, temporary invulnerability and temporary boost in user's attack frequency. 
				The armor of the user is recharged if depleted after a a few seconds providing him with a smart sustainability. 
				A persistent high score table can be accessed from the menu screen that keeps the top five attempts and the respective attempt number. 
				The graphics consist from sprite animations and particle effects.</p>
				<p>The game can be freely downloaded from <a href="https://play.google.com/store/apps/details?id=com.TheMisku.SpaceRetributor">Google Play</a>.</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Space-Retributor">here.</a></p>`,
				tags: "Unity"
			},
			{
				image: "images\\ballrunner.png",
				image2: "images\\ballrunnerFull.png",
				title: "Ball Runner",
				summary: "A platform-runner mini game with simplistic graphics and procedurally generated level.",
				overview: `<p>A platform/runner mini game with simplistic graphics.</p>
				<p>Mostly a case study for automatic tile-map generation. 
				The environment is generated randomly and infinitely as long as the player survives and progresses. 
				There are collectibles along the way for the user, which can be gathered to increase his score. 
				However there are some that will hinder his movement abilities, so collect with caution.</p>
				<p>The game can be freely downloaded on android devices from <a href="https://play.google.com/store/apps/details?id=com.NoCompany.Platformer">Google Play</a>.</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Ball-Runner">here.</a></p>`,
				tags: "Unity"
			}
		]
	},
	{
		header: "Other",
		projects: [
			{
				image: "images\\calendar.png",
				image2: "images\\calendar.png",
				title: "Calendar based Scheduler",
				summary: "A scheduler created for a museum to hold the guided tours and generate weekly and semester reports.",
				overview: `<p>This project was created for a naval museum as a scheduler in order to store their guided tours and have a good visualisation of the timetable to increase their productivity. 
				It features three view modes; The monthly view is a compact version in order to have a full scale visualisation of the timeschedule without worrying about individual group details. 
				It is the prefered version when in the process of booking a new group because the user can easily see information about the period around a certain date and conclude faster to an appropriate day/time.
				The second most usefull view mode is the daily mode. There the user can add or review each group by looking at the full details.
				The last view mode is the weekly, which gives full information of the user about each day of week and each appointment. 
				It is not so visually appealing, but it is used in order to automatically generate the weekly report (exported in pdf).
				Apart from the weekly report, the application also features the generation of a semester report which is more client specific.</p>
				<p>Furthermore, there are a lot of setting for customisation and extensibility.
				The timetable to each day of week can be altered in order to suit the customer needs.
				Also the detailes that are stored for each group can be defined and the user can create a variety of such groups.
				To add to that, colour groups can be defined, and when creating a new appointment you can set its special colour group to be visualised in the monthly view. 
				That helps as a reminder to the user when there is a special appointment or occasion coming up.</p>
				<p>As far as the data is concerned, they are stored in XML files. There is a file hierarchy as year>month>xmlfile and in the file they are separated by day as per parent>children. 
				So when the application tries to retrieve information about a day, the algorithm goes directly to the associated year/month, so that it doesnt have to go through all the data.</p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Calendar">here.</a></p>`,
				tags: "Unity"
			},
			{
				image: "images\\robot.png",
				image2: "images\\robot.png",
				title: "Automated Resoure Retrieval with Mobile Robots",
				summary: "Robotics group project with aim of constructing an autonomous robot for navigating in an arena, searching the specified resources and retrieving them back to the base.",
				overview: `<p>A robotics project conducted in a team of three. 
				The aim of the project was to construct an autonomous mobile robot for navigating in an arena, searching the specified resources and retrieving them back to the base. 
				The robot itself was constructed using Phidget electrical boards, motors and sensors, a fit-PC, a camera and Lego pieces. 
				It used two IR sensors and one sonar for navigation and avoidance, the camera for recognising resources and a gripper for collecting them.</p>`,
				tags: "C++, Pthreads, Phidget, Lego"
			},
			{
				image: "images\\NN.png",
				image2: "images\\NN.png",
				title: "Neural Network and Genetic Algorithm",
				summary: "Construction of Neural Network to learn two function outputs with single input and optimisation of hidden layer by a genetic algorithm.",
				overview: `<p>An example of a Neural Network simulating the result of two functions in C++. 
				The initial structure includes one input node, one hidden layer with five hidden nodes, two output nodes and two threshold nodes on transition between layers. 
				The Neural Network is trained on a set of input and output results and validated on a different set of input-output. 
				Optimisation through Genetic Algorithm is conducted to optimise the number of hidden neurons. </p>
				<p>Source code available <a href="https://github.com/StavrosAnastopoulos/neuralnet">here.</a></p>`,
				tags: "C++"
			}
		]
	}
]

const replaceCard = (x, y, b) => document.getElementById(`${x}_${y}`).replaceWith(createProjectCard(x, y, !b));

const createProjectCard = (x, y, extended) => {
	let project = database[x].projects[y];

	let card = document.createElement("div");
	card.setAttribute("id", `${x}_${y}`)
	card.className = "card box-shadow anim-button";
	card.style.width = extended ? "100%" : "18rem";
	card.style.margin = "3px";
	card.addEventListener("click", () => replaceCard(x, y, extended));
	let container;
	if(extended){
		container = document.createElement("div");
		container.style = "flex";
	}

	let img = document.createElement("img");
	img.className = extended ? "card-img-top-ext" : "card-img-top";
	let image = extended ? project.image2 : project.image;
	img.src = image;
	img.alt = image;

	let cardBody = document.createElement("div");
	cardBody.className = "card-body project-card-body";
	if (extended) cardBody.style.minWidth = "55%"

	let header = document.createElement("h5");
	header.className = "card-title";
	header.appendChild(document.createTextNode(project.title));

	let cardText = document.createElement("p");
	cardText.className = "card-text";

	let summary = document.createElement("p");
	if (extended) summary.innerHTML = project.overview;
	else summary.appendChild(document.createTextNode(project.summary));
	
	let tags = document.createElement("p");
	tags.className = "tags";
	tags.appendChild(document.createTextNode(`Tags: ${project.tags}`));

	cardText.appendChild(summary);
	cardText.appendChild(tags);
	cardBody.appendChild(header)
	cardBody.appendChild(cardText);
	if (extended){
		container.appendChild(img);
		container.appendChild(cardBody);
		card.appendChild(container);
	} else {
		card.appendChild(img);
		card.appendChild(cardBody);
	}
	return card;
}

const createProjectClass = (n = 0, b = false) => {
	let card = document.createElement("div");
	card.className = "card-header box-shadow anim-button";
	card.id = `heading${n}`;
	card.setAttribute("data-toggle", "collapse");
	card.setAttribute("data-target", "#collapse"+n);
	card.setAttribute("aria-expanded", b?"true":"fale");
	card.setAttribute("aria-collapse", `collapse${n}`);

	let header = document.createElement("h5");
	header.className = "mb-0";

	let headerText = document.createElement("p");
	headerText.className = "collapse-header";
	headerText.appendChild(document.createTextNode(database[n].header));

	header.appendChild(headerText);
	card.appendChild(header);

	let collapse = document.createElement("div");
	collapse.id = `collapse${n}`;
	collapse.className = b?"collapse show box-shadow":"collapse box-shadow";
	collapse.setAttribute("aria-labelledby", card.id);
	collapse.setAttribute("data-parent", "#accordionExample");

	let container = document.createElement("div");
	container.style.display = "flex";
	container.style.flexWrap = "wrap";

	for(let i = 0; i < database[n].projects.length; i++)
		container.appendChild(createProjectCard(n, i, false));
	collapse.appendChild(container);

	return [card, collapse];
}

const showProjects = () =>{
	let element = document.getElementById("projects")
	for(let i = 0; i < database.length; i++){
		let r = createProjectClass(i, i===0);
		element.appendChild(r[0]);
		element.appendChild(r[1]);
	}
}