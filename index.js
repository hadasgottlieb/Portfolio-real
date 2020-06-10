

function ltbox3() {
    //on click details, ltbox is emptied, and ltbox container toggles to display: block, and clicked item info is displayed in ltbox. 
    $(".avigdor-site .hover-text").on("click", function() {
        console.log("avigdor ltbox function ran");
        $(".ltbox-overlay").toggleClass("invisible");
        $(".ltbox-avigdor").toggleClass("invisible"); //should turn on lightbox

    });
    $(".gematria-app .hover-text").on("click", function() {
        console.log("gematria ltbox function ran");
        $(".ltbox-overlay").toggleClass("invisible");
        $(".ltbox-gematria").toggleClass("invisible"); //should turn on lightbox

    });
    $(".this-site .hover-text").on("click", function() {
        console.log("thisSite ltbox function ran");
        $(".ltbox-overlay").toggleClass("invisible");
        $(".ltbox-thisSite").toggleClass("invisible"); //should turn on lightbox

    });
};     



function ltboxClose() {

    //on click X, ltbox container toggles to display: none;
    $(".ltbox-avigdor-close").on("click", function() {
        console.log("ltboxClose avigdor ran");
        $(".ltbox-overlay").toggleClass("invisible");
        $(".ltbox-avigdor").toggleClass("invisible"); //should turn off lightbox
    });
    $(".ltbox-gematria-close").on("click", function() {
        console.log("ltboxClose gematria ran");
        $(".ltbox-overlay").toggleClass("invisible");
        $(".ltbox-gematria").toggleClass("invisible"); //should turn off lightbox
    });
    $(".ltbox-thisSite-close").on("click", function() {
        console.log("ltboxClose thisSite ran");
        $(".ltbox-overlay").toggleClass("invisible");
        $(".ltbox-thisSite").toggleClass("invisible"); //should turn off lightbox
    });
};

$(ltbox3);
$(ltboxClose);