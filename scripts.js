//https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json

let cupcakesCollection = null;

$.get("https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json", function(data){

    console.log(data);
    displayCupcakes(data);

    cupcakesCollection = data;
}, "json").fail(function(){
    $("#cupcakes").empty();
    $("#cupcakes").append("<div>There was an error making a request</div>");
});

$("#alpha").on("click", function(){
    if(cupcakesCollection[0].name === "Bubble Gum Pop"){
        return;
    }else{
        let backwardsCupcakes = cupcakesCollection;
        backwardsCupcakes = backwardsCupcakes.reverse();
        displayCupcakes(backwardsCupcakes);
    }
});

$("#zed").on("click", function(){
    if(cupcakesCollection[0].name === "Bubble Gum Pop"){
        let backwardsCupcakes = cupcakesCollection;
        backwardsCupcakes = backwardsCupcakes.reverse();
        displayCupcakes(backwardsCupcakes);
    }else{
        return;
    }
});

function displayCupcakes(data){
    //clear out container
    $("#cupcakes").empty();
    let string = "";

    //iterate through cupcakes to build string
    for(let cupcake of data){
        string +=
        `<section>
            <img src="${cupcake.image}" alt="${cupcake.alt}}">
            <h4>${cupcake.name}</h4>
            <b>Ingredients:</b>
            <p class="ingredients">${cupcake.ingredients}</p>
            <b>${cupcake.frosting} Frosting</b>
            <p class="frosting">${cupcake.frostingIngredients}</p>
        </section>`;
    }

    //add output
    $("#cupcakes").html(string);
}