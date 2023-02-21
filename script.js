let quote = document.querySelector('.src-container');

console.log(quote);

const quotes = [`<pre>printf(<span style="color:green">"Welcome to astyrisk's webpage!"</span>); </pre>`,
                `<pre>cout << <span style="color:green">"Welcome to astyrisk's webpage!"</span> << endl; </pre>`,
                `<pre> &lt;?= <span style="color:green">"Welcome to astyrisk's webpage!"</span> ?> </pre>`,
                `<pre>System.out.println(<span style="color:green">"Welcome to astyrisk's webpage!"</span>); </pre>`]

const random = Math.floor(Math.random() * 3);

quote.innerHTML = quotes[random];
