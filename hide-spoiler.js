kw = ['post credit','DC','Marvel','Avengers: Endgame','black widow','Captain America','Thor','Captain Marvel','thor','tesseract','time machine','howard stark','Avengers: Infinity War','shared universe','marvel comics','avengers','endgame','time travel','marvel cinematic universe','last of series','based on comic','super villain','revenge','asgardian','memorial','iron spider armor','thanos invasion','thanos','beheaded','battle of new york','destiny','death of lead character','death','ant man','iron man','black panther','war machine','the incredible hulk','scarlet','winter soldier','peter parker','tony stark','hawkeye','sword','hammer','infinity stone','spaceship','avengers','alien warlord','axe','doctor strange','epic battle','final battle','infinity gauntlet','loki','pepper potts character','stan lee cameo','radiation',]
tags = "SPANEMBIULOLI";
total = 0;

for(var ii = 0; ii < kw.length; ii++)
{
	o = $(`:contains(${kw[ii]}):not(:has(:contains(${kw[ii]})))`)
	for(var i = 0; i < o.length; i++)
	{
		if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
          continue;
        }
		hideSpoiler(o[i]);
		total++;
	}
}

if(total >= 10) {
	headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for(var i = 0; i < headings.length; i++) hideNode(headings[i]);
}

function hideSpoiler(node) {
	ancestor = node.parentNode;
	if(ancestor != null) {
		if (ancestor.parentNode != null 
				&& ancestor.tagName != 'BODY')
				ancestor = ancestor.parentNode;	
		imgs = ancestor.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(10px)"
		lists = ancestor.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) hideNode(lists[i]);
	}

	if (node == null || node.parentNode == null) return;
	all_child = node.parentNode.children;
	for(var i = 0; i < all_child; i++) {
		var type = all_child[i].tagName;
		if (tags.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(node);
}

function hideNode(node) {
	node.textContent = '[TEXT BLOCKED: POSSIBLE SPOILER]';
	node.style.color = 'red'
}
