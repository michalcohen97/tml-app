
////////////////// FIXME: test stuff ///////////////
washer1 = {name: "Mister Washer", white: true, img_src: "../images/washer3.png", location: "Jerusalem",
                description: "we need some place details or short intro, one to two rows top. no more than that?"};

washer2 = {name: "Watching Machine", white: false, img_src: "../images/washer2.png", location: "Haifa",
            description: "just another weird description..."};

////////////////////////////////////////////////////

const MAX_NUMBER_OF_BLOCKS = 5; // max number of blocks in the page

/*
    TODO: add Documentation
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