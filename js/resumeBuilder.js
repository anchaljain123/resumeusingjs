/*
This is empty on purpose! Your code to build the resume will go here.
 */
  var formattedName = HTMLheaderName.replace("%data%","ANCHAL Jain");
  var formattedRole = HTMLheaderRole.replace("%data%","Software Developer");
  var formattedEmail = HTMLemail.replace("%data%","anchaljain14@gmail.com");
  var formattedMobile = HTMLmobile.replace("%data%","9599165198");
  var formattedTwitter = HTMLtwitter.replace("%data%","anchaljain141");
  var formattedGit = HTMLgithub.replace("%data%","anchaljain123");
  var formattedLocation = HTMLlocation.replace("%data%","India");
  var formattedPic = HTMLbioPic.replace("%data%","/home/ttn/Desktop/244478873368397205-account_id=4.jpg");
  var formattedMsg = HTMLwelcomeMsg.replace("%data%","To be involved in work where I can utilize skill and creatively involved with system that effectively contributes to the growth of organization");

  var bio = {
    skills : ["programming","js","learner","leader"],
    contacts :{
      location: "Krishna Nagar,delhi"
    }
  },work = {
    "jobs":[
      {
        "employer":"TTN",
        "title":"Trainee",
        "location":"Noida",
        "date":"Feb 2017",
        "description":"TO THE NEW is a new-age, premium digital services company that is at the forefront of exploding digital landscape. TO THE NEW is the services arm of TO THE NEW Venture, a leading internet products and services company in South East Asia. We are a born-in-digitalcompany that uniquely combines the power of technology, analytics, creative and content for digital transformation."
      },
      {
        "employer":"TTN",
        "title":"SoftwareEngineer",
        "location":"Noida",
        "date":"Aug 2017 - Current",
        "description":"Our passionate team of over 700 people includes technology evangelists, social media experts, content specialists and creative mavericks who have transformedbusinesses of more than 300 companies spread across 30 countries worldwide.",
      }
    ]
  }
  var projects = {
    "projects":[
      {
        "title":"TTNBuzz",
        "date":"May 2017 – Jul 2017",
        "description":"TTN BUZZ” is a web-based project which is made for is implemented in MEAN stack. Main aim of this project is to create a online blogging applicable like Google blogs …etc. Using this application users can create website with the tag name of blogger in this software you can find all features that are present in existing blogging software’s. Users can design modify by adding new templates and add posts. Initially users need to register with application like in Google blog sites we log with Gmail user id similarly user need to get unique user id and password. These posts which are posted in blogger site will be available in results and users who visit blog can like or dislike posts.",
        "images":["http://bestmediainfo.com/wp-content/uploads/2014/03/TTN-logo.jpg",
        "http://static1.tothenew.com/sites/default/files/styles/normal/public/2016-10/westcon_450_261.jpg"
      ],
        "url":"https://buzzapp-ttn.herokuapp.com"
      },
      {
        "title":"TodoApp",
        "date":"Jult2017",
        "description":"If you haven't gone paperless with your to-do list yet, you're missing out. This app let you edit and rearrange your to-dos based on changing priorities, share lists with family members or other collaborators. Managing tasks in an app is more efficient, more powerful, and simply a better way to be more productive than doing it on paper.",
        "images":["https://i.imgur.com/OvMZBs9.jpg",
        "https://lh3.googleusercontent.com/-K-AR6CydUX_dtZ-Atx-NvOxrCi9fRHPIQUCTzsXftR_pI6bjKOdXqPh2BkTNgXaAVE=w300" ],
        "url":""
      },
    ]
  }
  var education = {
    "schools":[
    { "name":"SSCBS",
    "location": "Delhi",
    "degree":"BSC(H)Cs",
    "majors":["CS"],
    "dates":2014,
  },
  { "name":"JIMS",
  "location": "Rohini,Delhi",
  "degree":"MCA",
  "majors":["CS"],
  "dates":2017,
}
    ],
    "onlinecourses":[
      {
        "title":"JavaScript Crash Course",
        "school":"Udacity",
        "date": 2017,
        "url":"www.udacity.com/course/ud084"
      }
    ]
  }

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedGit);
  $('#topContacts').append(formattedTwitter);
  $('#topContacts').append(formattedLocation);
  $('#header').append(formattedPic);
  $('#header').append(formattedMsg);


for(i in bio.skills){
  if(i==0){
      $("#header").append(HTMLskillsStart);
  }
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedSkill);
}

function displayWork(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedRolemployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedRolemployerTitle);
      var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].date);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
  }
}

function inName(name){
  name=name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toLowerCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);
displayWork();

projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDate= HTMLprojectDates.replace("%data%",projects.projects[project].date);
    $(".project-entry:last").append(formattedDate);
    var formattedDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();
$("#mapDiv").append(googleMap)
