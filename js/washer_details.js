
////////////////// FIXME: test stuff ///////////////
washer1 = {name: "Mister Washer", img_src: "../images/washer3.png", location: "Jerusalem", 
rating: 3, vertified: true, top_review: "”Better than my mom - Fold the laundry perfectly” (nadav, last week)",
pics: ["../images/washer3.png", "../images/washer3.png", "../images/washer3.png", "../images/washer3.png"],
properties : {white: true, door_2_door : true, ironing : true, access : true}, 
machine_type : "bosch 9KG", description: "Hello! I’m Amitay, student at HUJI, worked from home so I’m available most of the time. New washing machine and dryer! and discount for soldiers!"};

washer2 = {name: "Watching Machine", white: false, img_src: "../images/washer2.png", location: "Haifa",
            description: "just another weird description..."};

cr_lo = {lat: 31.773610027001155, lng: 35.215351837826255} // burger room
////////////////////////////////////////////////////

const MAX_NUMBER_OF_BLOCKS = 5; // max number of blocks in the page


function give_rating(num_of_rating) {
    let rating_str = '';
    for (let i = 0; i < num_of_rating; i++) {
        rating_str += '<span class="fa fa-star checked"></span>';
    }
    for (let i = num_of_rating; i < 5; i++) {
        rating_str += '<span class="fa fa-star"></span>';
    }
    return rating_str
}

function show_washer_pictures(washer) {
    let pictures_str = '';
    for (let i = 0; i < washer.pics.length; i++) {
        pictures_str += '<img class="washer_img" src="'+ washer.pics[i] +'" alt="Mister Washer" aria-hidden="true">';
    }
    return pictures_str;
}


function give_vertified(washer) {
    let vertified = '';
    if (washer.vertified) {
        vertified += "<p>this washer is vertified! &#x2714;</p>";
    }
    else {
        vertified += '<p>this washer is not vertified! &#x2754;</p>';
    }
    return vertified;
}


function display_washer_header_details(washer_tag, washer) {
    let washer_header_details = "";

    let vertified = give_vertified(washer);
    washer_header_details += vertified;

    washer_header_details += '<h1>'+ washer.name + '</h1>';
    washer_header_details  += '<div class="row">';
    washer_header_details  += '<div class="col-md-2">';
    let rating = give_rating(washer.rating);
    washer_header_details += rating;

    washer_header_details += '</div>';
    washer_header_details += '<div class="col-md-10">';
    washer_header_details += '<h3>'+ washer.top_review +'</h3>';
    washer_header_details  += '</div></div>';
    washer_header_details += '<br><br>';

    let pictures = show_washer_pictures(washer);
    washer_header_details += pictures;

    washer_header_details += '<br><br>';
    washer_header_details += '<p>'+ washer.description +'</p>';
    document.getElementById(washer_tag).innerHTML = washer_header_details;
}

function insert_washer_properties(washer_tag, washer) {
    properties_section = "";
    properties_section += '<div class="container-fluid washer_properties">';
    properties_section += '<div class="w3-padding w3-xlarge w3-text-pink">';
    if (washer.properties.door_2_door) {
        properties_section += '<div class="row">';
        properties_section += '<div class="col-md-1">';
        properties_section += '<i class="fa fa-car"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-11">';
        properties_section += '<p>Make door2door services!</p>';
        properties_section += '</div></div>';
    }
    if (washer.properties.ironing) {
        properties_section += '<div class="row">';
        properties_section += '<div class="col-md-1">';
        properties_section += '<i class="fa fa-shield"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-11">';
        properties_section += '<p>There is ironing service!</p>';
        properties_section += '</div></div>';
    }
        if (washer.properties.white) {
        properties_section += '<div class="row">';
        properties_section += '<div class="col-md-1">';
        properties_section += '<i class="fa fa-diamond"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-11">';
        properties_section += '<p>' + washer.name + ' do also white laundry!</p>';
        properties_section += '</div></div>';
    }
    if (washer.properties.access) {
        properties_section += '<div class="row">';
        properties_section += '<div class="col-md-1">';
        properties_section += '<i class="fa fa-wheelchair"></i>';
        properties_section += '</div>';
        properties_section += '<div class="col-md-11">';
        properties_section += '<p>There is acsses for disables!</p>';
        properties_section += '</div></div>';
    }
    properties_section += '</div>';
    document.getElementById(washer_tag).innerHTML = properties_section;
}

/*
    TODO: add Documentation

    @param {HTMLElement} washer_tag - the html isertion tag
*/
function insert_washer_blocks(washer_tag) {
    const washer_list_by_filter = [washer1, washer2, washer1, washer2]; // list of wahsers, after filters (?)

    let whole_washers_html_block = '';
    const max_number_of_blocks = Math.min(MAX_NUMBER_OF_BLOCKS, washer_list_by_filter.length);

    for (let i = 0; i < max_number_of_blocks; i++) {
        let washer_block_raw_html = create_one_washer_block(washer_list_by_filter[i]);
        whole_washers_html_block += washer_block_raw_html;
    }
    document.getElementById(washer_tag).innerHTML = whole_washers_html_block;
}

/*
    takes wahser object and returns string of html tags and content.
    the content represents one wahser block.

    @param {Washer} washer - washer js
    @return {void}
*/
function create_one_washer_block(washer) {
    let washer_block_raw_html = '';
    washer_block_raw_html += '<div class="container-fluid washer_block">';
    washer_block_raw_html += '<div class="row">';
    washer_block_raw_html += '<div class="col-md-6">';
    washer_block_raw_html += '<img class="washer_img" src="'+ washer.img_src +'" alt="Mister Washer" aria-hidden="true">';
    washer_block_raw_html += '</div>';
    washer_block_raw_html += '<div class="col-md-6">';
    washer_block_raw_html += '<div class="washer_text">';
    if (washer.white) {
        washer_block_raw_html += '<p>White and Colored in '+ washer.location +'</p>';
    }
    else {
        washer_block_raw_html += '<p>Colored in '+ washer.location +'</p>';
    }
    washer_block_raw_html += '<h2>'+ washer.name +'</h2>';
    washer_block_raw_html += '<p>'+ washer.description +'</p>';
    washer_block_raw_html += '</div></div></div></div>';
    return washer_block_raw_html;
}

/*

*/
function initMap(current_location) {
    // The map, centered at current location
    const map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 15,
        // center: current_location,
        center: cr_lo,
    });
    // The marker, positioned at current location
    // const marker = new google.maps.Marker({
    //     position = current_location,
    //     map: map,
    // });
}