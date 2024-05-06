import head from "./header.js"
import cont from "./content.js"
import foot from "./footer.js"
document.getElementById('root').innerHTML = 
`
<h2> ${head} </h2> 
<h2> ${cont} </h2>
<h2> ${foot("Brodway Infosys")} </h2>
`
