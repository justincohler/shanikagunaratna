$(document).ready(function(){
	/*	THE divState MAP HOLDS ALL ACCORDION LIST ITEM IDS (KEY)
	*  	AND THE OPENED/CLOSED STATUS FOR EACH (VALUE - TRUE OR FALSE)
	*/
	var divState = {};
	$(".accordion .gridcolumn div").click(function(){
		
	
		// ENSURE ALL ACCORDIONS ARE CLOSED
		$(".accordion").find("li").removeClass('active');
		$(".accordion").find("li").css("overflow", "hidden");
		$(".accordion").find("li").animate({height: "0px"}, {duration:300, queue:false});
		
		// SET ALL DIV STATUSES EXCEPT THE CLICKED DIV TO CLOSED
		for (div in divState){
			if (divState[div] && div != $(this).attr('id')){
				divState[div] = false;
			}
		}
			
		// EXPAND THE CLICKED DIV ITS STATUS IS CLOSED
		if (!divState[$(this).attr('id')]){
			$(this).find("li").addClass('active');
			$(this).find("li").css("overflow", "visible");
			$(this).find("li").css("height", "100%");
			var h = $(this).find("li").height();
			$(this).find("li").css("height", "0px");
			$(this).find("li").animate({height: h}, 500, "easeOutBack");
			divState[$(this).attr('id')] = true;
		} 
		// CLOSE THE CLICKED DIV IF ITS STATUS IS OPEN
		else {
			divState[$(this).attr('id')] = !divState[$(this).attr('id')];
		}
	});
});