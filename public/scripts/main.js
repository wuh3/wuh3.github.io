var rhit = rhit || {};
rhit.PageController = class {
    constructor() {


		const nav = document.getElementById("portfolioLink");
		nav.onmouseover= (event) => {
            document.querySelector(".projectNav").style.display = "block";
        }

        nav.onmouseout= (event) => {
            document.querySelector(".projectNav").style.display = "none";
        }
	}
}
rhit.main = function() {
    console.log("ready");
    new rhit.PageController();
    
};
rhit.main();