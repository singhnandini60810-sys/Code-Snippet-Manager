let snippets =
JSON.parse(localStorage.getItem("snippets")) || [];



function saveSnippet(){


let title =
document.getElementById("title").value;


let language =
document.getElementById("language").value;


let code =
document.getElementById("code").value;



snippets.push({

title,
language,
code

});


localStorage.setItem(
"snippets",
JSON.stringify(snippets)
);


display();



}



function display(){


let box =
document.getElementById("snippets");


box.innerHTML="";



snippets.forEach((item)=>{


box.innerHTML +=

`

<div class="snippet">


<h2>
${item.title}
</h2>


<p>
Language: ${item.language}
</p>


<pre>
${item.code}
</pre>


</div>

`;

});


}



function searchSnippet(){


let value =
document.getElementById("search")
.value
.toLowerCase();



let box =
document.getElementById("snippets");


box.innerHTML="";



snippets
.filter(
x=>x.title.toLowerCase()
.includes(value)
)
.forEach(item=>{


box.innerHTML +=

`

<div class="snippet">

<h2>${item.title}</h2>

<p>${item.language}</p>

<pre>${item.code}</pre>

</div>

`;

});


}



display();
