console.log("hello");

var dictionary = [

    {
        word:"apple",
        def:"A round fruit bla bla",
        rel:["mango", "pear", "guava"]
    },
    {
        word:"baby",
        def:"the young one of a human",
        rel:["child", "toddler", "teen"]
    },
    {
        word:"car",
        def:"transports people from place to place",
        rel:["bus", "bicycle", "truck"]
    },
    {
        word:"computer",
        def:"An electronic device",
        rel:["laptop", "tablet", "palmtop"]
    },
    {
        word:"mosquito",
        def:"An insect",
        rel:["ant", "beetle", "butterfly"]
    },
    
];
//fill the dictionary with words
init = function(){
for (var i = 0; i < dictionary.length; i++) { 
document.getElementById('word-list').innerHTML += "<li onclick='show(" + i + ")'>" +
dictionary[i].word + "</li>";
}
}

//call the init function when page loads
init();