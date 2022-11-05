Status = "";
objects = [];


function setup()
{
    canveas = createCanvas(480,380);
    canvas.position();

    video = createCapture(VIDEO);
    video.hide();
    video.size(480,380);  
}

function start()
{
    objectDetector = ml5.objectDetector('cocosssd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded()
{
    console.log("Model Loaded !");
}

function draw()
{
    image(video,0,0,480,380);

    if(Status != "")
    {
        objectDetector.detect(video,gotResults)
        for(i = 0; i < objects.length; i++)
        {
           document.getElementById("status").innerHTML = "Status : Objects Detceted ";
           document.getElementById("object_found").innerHTML = "Number of objects detected are :"+ objects.length;

           fill("red");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + "" + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
           noFill();
           stroke("red");
           rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }

    }
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = true;
}