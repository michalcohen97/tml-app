
////////////////// FIXME: test stuff ///////////////
washer1 = {name: "Mister Washer", white: true, img_src: "../images/washer3.png", location: "Jerusalem",
                description: "we need some place details or short intro, one to two rows top. no more than that?", lat: 31.779610027001155, lng: 35.210351837826255};
washer2 = {name: "Watching Machine", white: false, img_src: "../images/washer2.png", location: "Haifa",
            description: "just another weird description...", lat: 31.775659957199842, lng: 35.21756250648687};
const washer_list_by_filter = [washer1, washer2, washer1, washer2];
current_location = {lat: 31.773610027001155, lng: 35.215351837826255} // burger room
////////////////////////////////////////////////////

const MAX_NUMBER_OF_BLOCKS = 5; // max number of blocks in the page

/*
    currently - use all of the washers (query from server?) and take a filter function, than create each of the washers in block and display them.
    FIXME: hard to order-by by location\rating, maybe will take a lot of time to load but DB
*/
function insert_washer_blocks(filter = () => true) {    
    let whole_washers_html_block = '';
    const max_number_of_blocks = Math.min(MAX_NUMBER_OF_BLOCKS, washer_list_by_filter.length);

    for (let i = 0; i < max_number_of_blocks; i++) {
        if (filter(washer_list_by_filter[i])) {
            let washer_block_raw_html = create_one_washer_block(washer_list_by_filter[i]);
            whole_washers_html_block += washer_block_raw_html;
        }
    }

    document.getElementById("washers_list_of_blocks").innerHTML = whole_washers_html_block;
    
    // const xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = () => {
    //     if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    //         document.getElementById("washers_list_of_blocks").innerHTML = whole_washers_html_block;
    //     }
    // }
    // xmlhttp.open("GET", "???", true);
    // xmlhttp.send();
}

/*
    refresh all of the filters
*/
function refresh_filters() {
    insert_washer_blocks();
    initMap();
}

/*
    TODO: add Documentation
*/
function filter_washers_by_self_service() {
    // TODO: change for the real purpose
    function is_washer_self_service(washer) {
         return (washer.location == "Jerusalem");
    }

    // insert new blocks and markers
    insert_washer_blocks(is_washer_self_service);
    initMap(is_washer_self_service);
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
    initialzie google maps object and sets markers in the washers location.
*/
function initMap(filter = () => true) {
    // The map, centered at current location
    const map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 15,
        center: current_location,
    });
    // adding markers for the washers (after filter)
    for (i in washer_list_by_filter) {
        if (filter(washer_list_by_filter[i])) {
            const marker = new google.maps.Marker({
                position: { lat: washer_list_by_filter[i].lat, lng: washer_list_by_filter[i].lng },
                animation: google.maps.Animation.DROP,
                map: map,
                washer: washer_list_by_filter[i],
        })
        marker.addListener("click", () => {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
        })
    }}
}
