



////////////////// FIXME: test stuff ///////////////
washer1 = {name: "Amitay Rachman", rating: 3, vertified: true, top_review: "”Better than my mom - Fold the laundry perfectly” (nadav, last week)",
profile_pic: "../images/amitay pic.jpg", img_src: "../images/washer1.png", pics: ["../images/washer2.png", "../images/miele.png", "../images/softener.jpg", "../images/folding.jpg","../images/washer3.png"],
location_str: "Reahvia, Jerusalem", location_cor: [31.773610027001155,35.215351837826255],
num_of_reviews: "12",
machine_type : "bosch 9KG", description: "Hello! I’m Amitay, student at HUJI! worked from home so I’m available most of the time. New washing machine and dryer! and discount for soldiers!", 
commit: "48 hours", opening_times: {Sunday: [11,16], Monday: [09, 18],Tuesday: [10, 18],Wednesday: [9, 18],Thursday: [10, 20],Friday: [09, 20],Saturday: [10, 18]}, 
clients_who_review: ['client3', 'client5'] , properties : {white: true, door_2_door : true, ironing : true, access : true}
};

washer2 = {name: "Watching Machine", white: false, img_src: "../images/washer2.png", location: "Haifa",
            description: "just another weird description..."};




client3 = {name: "client3", drop_off_time: [11,14], rating: 4.5, location: {lat: 31.773610027001155, lng: 35.215351837826255},
wash_setting: {degree: 50, smell: "icy pear"},
img: "../images/client3.png", description: "Hi, my name is client3 and I don't do any spory so my clothes smell OK :)",
prefer_properties : {white: true, door_2_door : false, ironing : true, access : true}
};


const MAX_NUMBER_OF_PICS = 6; // max number of pics in the page


////////////////////////////////////////////////////

function get_washer_name(tag, washer) {
    washer_name = "<h2>"+ washer.name + "</h2>";
    document.getElementById(tag).innerHTML = washer_name;
}

function get_washer_adress(tag, washer) {
    washer_adress = "<i class='fa fa-map-marker'></i>";
    washer_adress += "   " + washer.location_str;
    document.getElementById(tag).innerHTML = washer_adress;
}

function get_washer_rating(tag, washer) {
    rating_str = '<span class="fa fa-star checked_stars">';
    rating_str += "   " + washer.rating + " (" + washer.num_of_reviews + " reviews )" ;
    rating_str += '</span>';
    document.getElementById(tag).innerHTML = rating_str;
}

function get_washer_top_review(tag, washer) {
    washer_top_review = "<blockquote class='top_review'>";
    washer_top_review += "<p class='mb-0'>" + washer.top_review + "</p>";
    washer_top_review += "</blockquote>";
    document.getElementById(tag).innerHTML = washer_top_review;
}

function get_washer_images(tag, washer) {
    let max_pics = Math.min(MAX_NUMBER_OF_PICS, washer.pics.length);
    let pictures_str = '';
    for (let i = 0; i < 2; i++) {
        pictures_str += '<img class="washer_big_img" src="'+ washer.pics[i] +'" alt="Mister Washer" aria-hidden="true">';
    }
    for (let i = 2; i < max_pics; i++) {
        pictures_str += '<img class="washer_small_img" src="'+ washer.pics[i] +'" alt="Mister Washer" aria-hidden="true">';
    }
    document.getElementById(tag).innerHTML = pictures_str;
}

function get_washer_profile_img(tag, washer) {
    washer_desc = '<img class="washer_profile_img" src="'+ washer.profile_pic +'" alt="Mister Washer"  aria-hidden="true">';
    document.getElementById(tag).innerHTML = washer_desc;
}


function get_washer_description(tag, washer) {
    washer_desc = '<div class = "container- fluid description_text">'
    washer_desc += "<p>"+ washer.description + "</p>";
    washer_desc += '</div>';
    document.getElementById(tag).innerHTML = washer_desc;
}


function insert_washer_properties(washer_tag, washer) {
    properties_section = "";
    properties_section += '<div class="w3-padding w3-large w3-text-pink">';
    properties_section += '<div class="row">';
    if (washer.properties.door_2_door) {
        properties_section += '<div class="col-md-1">';
        properties_section += '<section class="single_property_section">';
        properties_section += '<i class="fa fa-car"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-5">';
        properties_section += '<p>door2door services!</p>';
        properties_section += '</div>';
        properties_section += '</section>';
    }
    if (washer.properties.ironing) {
        properties_section += '<div class="col-md-1">';
        properties_section += '<section class="single_property_section">';
        properties_section += '<i class="fa fa-shield"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-5">';
        properties_section += '<p>There is ironing service!</p>';
        properties_section += '</div>';
        properties_section += '</section>';
    }
        if (washer.properties.white) {
        properties_section += '<div class="col-md-1">';
        properties_section += '<section class="single_property_section">';
        properties_section += '<i class="fa fa-diamond"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-5">';
        properties_section += '<p>' + washer.name + ' make whites!</p>';
        properties_section += '</div>';
        properties_section += '</section>';
    }
    if (washer.properties.access) {
        properties_section += '<div class="col-md-1">';
        properties_section += '<section class="single_property_section">';
        properties_section += '<i class="fa fa-wheelchair"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-5">';
        properties_section += '<p>There is acsses for disables!</p>';
        properties_section += '</div>';
        properties_section += '</section>';
    }
    properties_section += '</div></div>';
    document.getElementById(washer_tag).innerHTML = properties_section;
}


// function give_vertified(washer) {
//     let vertified = '';
//     if (washer.vertified) {
//         vertified += "<p>this washer is vertified! &#x2714;</p>";
//     }
//     else {
//         vertified += '<p>this washer is not vertified! &#x2754;</p>';
//     }
//     return vertified;
// }



// map section
let map;

function initMap(washer) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: washer.location_cor,
    zoom: 15,
  });
}

function setPlace(washer) {
    var lat = washer.location_cor[0];
    var lng = washer.location_cor[1];
    var coor = new google.maps.LatLng(lat, lng);
      map.panTo(coor)
      
  }

// opening hours section:
// var currentDate = new Date();
// var weekday = [];
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// function get_time(tag, day, open_or_close) {
//     times = "";
//     switch(day) {
//         case 0:
//             times = washer.opening_times.Sunday[open_or_close];
//             break; 
//         case 1:
//             times = washer.opening_times.Monday[open_or_close];
//             break; 
//         case 2:
//             times = washer.opening_times.Sunday[open_or_close];
//             break;  
//         case 3:
//             times = washer.opening_times.Sunday[open_or_close];
//             break; 
//         case 4:
//             times = washer.opening_times.Sunday[open_or_close];
//             break; 
//         case 5:
//             times = washer.opening_times.Sunday[open_or_close];
//             break; 
//         case 6:
//             times = washer.opening_times.Sunday[open_or_close];
//             break; 
//       }
//       return("g")
//     //   document.getElementById(tag).value =  "<p>good</p>";
// }

function checkOpeningTimes(tag,washer) {
    let date = new Date(); // current time
    let hours = date.getHours();
    let day = date.getDay();
    switch(day) {
        case 0:
            if (washer.opening_times.Sunday[0] <= hours && washer.opening_times.Sunday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break; 
        case 1:
            if (washer.opening_times.Monday[0] <= hours && washer.opening_times.Monday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break; 
        case 2:
            if (washer.opening_times.Tuesday[0] <= hours && washer.opening_times.Tuesday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break;  
        case 3:
            if (washer.opening_times.Wednesday[0] <= hours && washer.opening_times.Wednesday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break; 
        case 4:
            if (washer.opening_times.Thursday[0] <= hours && washer.opening_times.Thursday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break; 
        case 5:
            if (washer.opening_times.Friday[0] <= hours && washer.opening_times.Friday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break; 
        case 6:
            if (washer.opening_times.Saturday[0] <= hours && washer.opening_times.Saturday[1] >= hours) {
                document.getElementById(tag).innerHTML = '<p id="openClosed">working now</p>';
                document.getElementById("openClosed").style.color = "green";            
            }
            else {
                document.getElementById(tag).innerHTML = '<p id="openClosed">closed now</p>';
                document.getElementById("openClosed").style.color = "red";      
            }
            break; 
      }
}


function color_today() {
    let date = new Date(); // current time
    let day = date.getDay();
    let table = document.getElementById("opening-hours-table")
    let rows = table.getElementsByTagName("tr"); 
    rows[day].style.color = '#52d6edff';
}




function get_washer_commitment(tag, washer) {
    washer_desc = "<h5 class='commit_text'>" + washer.name + " commits the lundry will be ready in: " + washer.commit + "!</h5>";
    washer_desc += '<button id="avButton" type="button" class="btn btn-success">order from ' + washer.name  + '</button>';
    document.getElementById(tag).innerHTML = washer_desc;
    document.getElementById("avButton").onclick = function () {
        location.href = "../src/laundry_form_page.html";
        sessionStorage.setItem("washer", "washer1");
    }
}