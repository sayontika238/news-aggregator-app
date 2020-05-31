const url ="http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-30&sortBy=publishedAt&apiKey=4f403b4d39ba45b9948f3e95cdb92b2a

$(document).ready(async function news(){
	let response = await fetch(url);
	let data = await response.json();
	//debugger;
	let news = ''
	data.articles.forEach(article=> {
		// put your loop code over here 
				news+= `
                    <li class="article">
                       <img class="article-img" src="${article.urlToImage}"/>
                       <h2 class="article-title">${article.title}</h2>
                       <p class="article-description">${article.description}</p>
                       <span class="article-author">${article.author}</span>
                       <a class="article-link" href="${article.url}" target="_blank"></a>
                    </li>
                `;
			});//iteration
         /* let response = await fetch(url);
		  let data = await response.json();
        //x.then(res => res.json())
		data.forEach((x) => {});
        .then((articles) => {
            let output="";
            news.articles.forEach(article=>{
                
					   console.log("hii ".output);
            });*/
			
            document.getElementById("news-articles").innerHTML=news;
        })
    
    

$(document).ready(function(){ 
    $('#search').keypress(()=>{
      let searchField = $("#search").val();
      const url1 = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-30&sortBy=publishedAt&apiKey=4f403b4d39ba45b9948f3e95cdb92b2a
      
      if(searchField !== ""){
        $.ajax({
          url: url1,
          method: "GET",
          dataType: "json",
          
            success: function(news){
            let output1 = "";
            let articles = news.articles;
            
            for(var art in articles){
              output1 +=`
                <li class="article">
                   <img class="article-img" src="${art.urlToImage}"/>
                   <h2 class="article-title">${art.title}</h2>
                   <p class="article-description">${art.description}</p>
                   <span class="article-author">${art.author}</span>
                   <a class="article-link" href="${art.url}" target="_blank"></a>
                </li>`;
            }
			console.log(output2);
            if(output2 !== ""){
              document.getElementById("news-articles").innerHTML=output2;  
            }
            else{
				news_articles.innerHTML='<li class="not-found">No article was found based on the search.</li>';

				        } 
          }   
        }); 
      }
	 
    });
});
const url ='http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-07&sortBy=publishedAt&apiKey=4e5acce35bab4b4d9c29883a8ba9ded3';



$(document).ready(async function news(){
	let response = await fetch(url);
	let data = await response.json();
	//debugger;
	let news = ''
	data.articles.forEach(article=> {
		// put your loop code over here 
				news+= `
                    <li class="article">
                       <img class="article-img" src="${article.urlToImage}"/>
                       <h2 class="article-title">${article.title}</h2>
                       <p class="article-description">${article.description}</p>
                       <span class="article-author">${article.author}</span>
                       <a class="article-link" href="${article.url}" target="_blank"></a>
...

[Message clipped]  View entire message

Sayontika Konar <konarsayontika560@gmail.com>
Mon, May 25, 4:50 PM (6 days ago)
to Meghapatil920


const url ='http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-07&sortBy=publishedAt&apiKey=4e5acce35bab4b4d9c29883a8ba9ded3';



$(document).ready(async function news(){
	let response = await fetch(url);
	let data = await response.json();
	//debugger;
	let news = ''
	data.articles.forEach(article=> {
		// put your loop code over here 
				news+= `
                    <li class="article">
                       <img class="article-img" src="${article.urlToImage}"/>
                       <h2 class="article-title">${article.title}</h2>
                       <p class="article-description">${article.description}</p>
                       <span class="article-author">${article.author}</span>
                       <a class="article-link" href="${article.url}" target="_blank"></a>
                    </li>
                `;
<td id="gmail-LC25" class="gmail-blob-code gmail-blob-code-inner gmail-js-file-line" style="box
