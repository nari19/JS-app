console.log("start");

var mode =-1;
var select1_1 =-1;
var	select1_2 =-1;
var select2 =-1;
var count = 0;

var list_result = [5,4,3,2,1,0];
var rank_result = 17;

const TIME_RENDA = 10;

function timeOutRenda(){
	setmode(4);
}
function initmode(m){
	switch(m){
		case 0:
			/* {
			 	switch(select1_1){
			 		case 0:
			 			$("#voted1_1 img").attr({'src':'./mobile/result_num_1.png'});
			 			break;
			 		case 1:
			 			$("#voted1_1 img").attr({'src':'./mobile/result_num_2.png'});break;
			 		case 2:
			 			$("#voted1_1 img").attr({'src':'./mobile/result_num_3.png'});break;
			 		case 3:
			 			$("#voted1_1 img").attr({'src':'./mobile/result_num_4.png'});
			 			break;
						
			 		case 4:
			 			$("#voted1_1 img").attr({'src':'./mobile/result_num_5.png'});
			 			break;
			 		case 5:
			 			$("#voted1_1 img").attr({'src':'./mobile/result_num_6.png'});
			 			break;
			 	}// JavaScript Document
				
			 	switch(select1_2){
			 		case 0:
			 			$("#voted1_2 img").attr({'src':'./mobile/result_num_1.png'});
			 			break;
			 		case 1:
			 			$("#voted1_2 img").attr({'src':'./mobile/result_num_2.png'});break;
			 		case 2:
			 			$("#voted1_2 img").attr({'src':'./mobile/result_num_3.png'});break;
			 		case 3:
			 			$("#voted1_2 img").attr({'src':'./mobile/result_num_4.png'});
			 			break;
						
			 		case 4:
			 			$("#voted1_2 img").attr({'src':'./mobile/result_num_5.png'});
			 			break;
			 		case 5:
			 			$("#voted1_2 img").attr({'src':'./mobile/result_num_6.png'});
			 			break;
			 	}*/
			break;
		case 1:
			{
				switch(select1_1){
					case 0:
						$("#select2_1 img").attr({'src':'../mobile/footage/images/chara_board_01_01.png'});
						break;
					case 1:
						$("#select2_1 img").attr({'src':'../mobile/footage/images/chara_board_02_01.png'});break;
					case 2:
						$("#select2_1 img").attr({'src':'../mobile/footage/images/chara_board_03_01.png'});break;
					case 3:
						$("#select2_1 img").attr({'src':'../mobile/footage/images/chara_board_04_01.png'});
						break;
						
					case 4:
						$("#select2_1 img").attr({'src':'../mobile/footage/images/chara_board_05_01.png'});
						break;
					case 5:
						$("#select2_1 img").attr({'src':'../mobile/footage/images/chara_board_06_01.png'});
						break;
				}
				switch(select1_2){
					case 0:
						$("#select2_2 img").attr({'src':'../mobile/footage/images/chara_board_01_01.png'});
						break;
					case 1:
						$("#select2_2 img").attr({'src':'../mobile/footage/images/chara_board_02_01.png'});break;
					case 2:
						$("#select2_2 img").attr({'src':'../mobile/footage/images/chara_board_03_01.png'});break;
					case 3:
						$("#select2_2 img").attr({'src':'../mobile/footage/images/chara_board_04_01.png'});
						break;
						
					case 4:
						$("#select2_2 img").attr({'src':'../mobile/footage/images/chara_board_05_01.png'});
						break;
					case 5:
						$("#select2_2 img").attr({'src':'../mobile/footage/images/chara_board_06_01.png'});
						break;
				}
			}
			break;
		case 2:
			{
				switch(select2){
					case 0:
						$("#select3_1 img").attr({'src':'../mobile/footage/images/chara_board_01_01.png'});
						break;
					case 1:
						$("#select3_1 img").attr({'src':'../mobile/footage/images/chara_board_02_01.png'});break;
					case 2:
						$("#select3_1 img").attr({'src':'../mobile/footage/images/chara_board_03_01.png'});break;
					case 3:
						$("#select3_1 img").attr({'src':'../mobile/footage/images/chara_board_04_01.png'});
						break;
						
					case 4:
						$("#select3_1 img").attr({'src':'../mobile/footage/images/chara_board_05_01.png'});
						break;
					case 5:
						$("#select3_1 img").attr({'src':'../mobile/footage/images/chara_board_06_01.png'});
						break;
				}
				switch(select1_1){
					case 0:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_1.png'});
						break;
					case 1:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_2.png'});break;
					case 2:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_3.png'});break;
					case 3:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_4.png'});
						break;
						
					case 4:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_5.png'});
						break;
					case 5:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_6.png'});
						break;
				}
				switch(select1_2){
					case 0:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_1.png'});
						break;
					case 1:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_2.png'});break;
					case 2:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_3.png'});break;
					case 3:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_4.png'});
						break;
						
					case 4:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_5.png'});
						break;
					case 5:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_6.png'});
						break;
				}
				
			
				
			}
			break;
		case 3:
			
				// set game timer
			setTimeout(timeOutRenda, 1000 * TIME_RENDA);
			break;
		case 4:
			
			// make result
			Math.random();
			Math.random() * 6;
			Math.floor(Math.random() * 6);
			
			var list_src =[0,1,2,3,4,5];
			var list_dst =[];
			
			for(var i=0; i<6;i++){
				let r  = Math.floor(Math.random() * list_src.length);
				list_dst.push(list_src[r]);
				list_src.splice(r,1);
				
//				console.log(list_src.slice(r,1));
				
				console.log(list_src);
				
			}
			console.log(list_dst);
			list_result = list_dst;
			
			
			if ((list_result[0] == select1_1 && list_result[1] == select1_2) || (list_result[0] == select1_2 && list_result[1] == select1_1)){
				//win
				$("#result1 img").attr({'src':'../mobile/footage/images/result_Forecast_hit.png'});
				$("#result2 img").attr({'src':'../mobile/footage/images/result_message_win.png'});
			}else{
				//lose
				$("#result1 img").attr({'src':'../mobile/footage/images/result_Forecast_Miss.png'});
				$("#result2 img").attr({'src':'../mobile/footage/images/result_message_lose.png'});
			}
			
			switch(list_result[0]){
					case 0:
						$("#ranking01 img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 1:
						$("#ranking01 img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 2:
						$("#ranking01 img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 3:
						$("#ranking01 img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 4:
						$("#ranking01 img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
					case 5:
						$("#ranking01 img").attr({'src':'../mobile/footage/images/rank_namemobile_06_01.png'});
						break;
				}
			switch(list_result[1]){
					case 0:
						$("#ranking02 img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 1:
						$("#ranking02 img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 2:
						$("#ranking02 img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 3:
						$("#ranking02 img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 4:
						$("#ranking02 img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
					case 5:
						$("#ranking02 img").attr({'src':'../mobile/footage/images/rank_namemobile_06_01.png'});
						break;				
				}
			switch(list_result[2]){
					case 0:
						$("#ranking03 img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 1:
						$("#ranking03 img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 2:
						$("#ranking03 img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 3:
						$("#ranking03 img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 4:
						$("#ranking03 img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
					case 5:
						$("#ranking03 img").attr({'src':'../mobile/footage/images/rank_namemobile_06_01.png'});
						break;
				}
			switch(list_result[3]){
					case 0:
						$("#ranking04 img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 1:
						$("#ranking04 img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 2:
						$("#ranking04 img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 3:
						$("#ranking04 img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 4:
						$("#ranking04 img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
					case 5:
						$("#ranking04 img").attr({'src':'../mobile/footage/images/rank_namemobile_06_01.png'});
						break;
				}
			switch(list_result[4]){
					case 0:
						$("#ranking05 img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 1:
						$("#ranking05 img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 2:
						$("#ranking05 img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 3:
						$("#ranking05 img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 4:
						$("#ranking05 img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
					case 5:
						$("#ranking05 img").attr({'src':'../mobile/footage/images/rank_namemobile_06_01.png'});
						break;
				}
			switch(list_result[5]){
					case 0:
						$("#ranking06 img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 1:
						$("#ranking06 img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 2:
						$("#ranking06 img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 3:
						$("#ranking06 img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 4:
						$("#ranking06 img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
					case 5:
						$("#ranking06 img").attr({'src':'../mobile/footage/images/rank_namemobile_06_01.png'});
						break;
				}
			
			switch(select1_1){
					case 0:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_1.png'});
						break;
					case 1:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_2.png'});break;
					case 2:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_3.png'});break;
					case 3:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_4.png'});
						break;
						
					case 4:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_5.png'});
						break;
					case 5:
						$("#mode2select1_1 img").attr({'src':'../mobile/result_num_6.png'});
						break;
				}
			switch(select1_2){
					case 0:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_1.png'});
						break;
					case 1:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_2.png'});break;
					case 2:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_3.png'});break;
					case 3:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_4.png'});
						break;
						
					case 4:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_5.png'});
						break;
					case 5:
						$("#mode2select1_2 img").attr({'src':'../mobile/result_num_6.png'});
						break;
				}
			
			switch(list_result.indexOf(select2)){
					case 0:
						$("#result_num img").attr({'src':'../mobile/footage/images/result_area_bar_1.png'});
						break;
					case 1:
						$("#result_num img").attr({'src':'../mobile/footage/images/result_area_bar_2.png'});
						break;
					case 2:
						$("#result_num img").attr({'src':'../mobile/footage/images/result_area_bar_3.png'});
						break;
					case 3:
						$("#result_num img").attr({'src':'../mobile/footage/images/result_area_bar_4.png'});
						break;
					case 4:
						$("#result_num img").attr({'src':'../mobile/footage/images/result_area_bar_5.png'});
						break;
					case 5:
						$("#result_num img").attr({'src':'../mobile/footage/images/result_area_bar_6.png'});
						break;
				}
			switch(select2){
					case 0:
						$("#result_name img").attr({'src':'../mobile/footage/images/result_name_1.png'});
						break;
					case 1:
						$("#result_name img").attr({'src':'../mobile/footage/images/rank_namemobile_01_01.png'});
						break;
					case 2:
						$("#result_name img").attr({'src':'../mobile/footage/images/rank_namemobile_02_01.png'});
						break;
					case 3:
						$("#result_name img").attr({'src':'../mobile/footage/images/rank_namemobile_03_01.png'});
						break;
					case 4:
						$("#result_name img").attr({'src':'../mobile/footage/images/rank_namemobile_04_01.png'});
						break;
					case 5:
						$("#result_name img").attr({'src':'../mobile/footage/images/rank_namemobile_05_01.png'});
						break;
				}
			break;
	}
}
function setmode(m){
	mode = m;
	initmode(m);
	switch(m){
		case 0:
			$("#first").removeClass("block_hidden");
			$("#second").addClass("block_hidden");
			$("#third").addClass("block_hidden");
			$("#forth").addClass("block_hidden");
			$("#fifth").addClass("block_hidden");
		
			break;
		case 1:
			$("#first").addClass("block_hidden");
			$("#second").removeClass("block_hidden");
			$("#third").addClass("block_hidden");
			$("#forth").addClass("block_hidden");
			$("#fifth").addClass("block_hidden");
			
			break;
		case 2:
			$("#first").addClass("block_hidden");
			$("#second").addClass("block_hidden");
			$("#third").removeClass("block_hidden");
			$("#forth").addClass("block_hidden");
			$("#fifth").addClass("block_hidden");
		
			break;
		case 3:
			$("#first").addClass("block_hidden");
			$("#second").addClass("block_hidden");
			$("#third").addClass("block_hidden");
			$("#forth").removeClass("block_hidden");
			$("#fifth").addClass("block_hidden");
		
			break;
		case 4:
			$("#first").addClass("block_hidden");
			$("#second").addClass("block_hidden");
			$("#third").addClass("block_hidden");
			$("#forth").addClass("block_hidden");
			$("#fifth").removeClass("block_hidden");
		
			break;
	}
}
$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
	console.log("ready");
	
	if (false) {
		//TEST
		select1_1= 3;
		select1_2= 5;
		select2= 3;
		setmode(4);
		
	} else {
		setmode(0);
		
	}
	
	
	function checkNext0(){
		console.log("checkNext0");
		// check next btn
		if (select1_1 != -1 && select1_2 != -1){
			//select ok
			$("#btn_mode0next").addClass("btn_enable");


		}else{
			//select bad
			$("#btn_mode0next").removeClass("btn_enable");	
		}
	}
	
	$("#select1_1").click(function(){
		console.log(select1_1);
		console.log(select1_2);
		//select1_1 = 0;	
		//$("#select1_1").addClass("btn_selected");
		let target = 0;
		if (select1_1 == target || select1_2 == target){ 
			// seleted
		 	$("#select1_1").removeClass("btn_selected");
		    if (select1_1 == target){
				select1_1 = -1;
			}else{
				select1_2 = -1;
				
			}
		
			checkNext0();
		}else{
			// not selected
			if (select1_1 == -1 || select1_2 == -1){
			  //spaceOK	
			$("#select1_1").addClass("btn_selected");
				if (select1_1 == -1){
					select1_1 = target;
				}else{
					select1_2 = target;
				}
				// check next btn
				checkNext0();
			}else{
			  //spaceBAD
				
			}
		}
		
   });
	$("#select1_2").click(function(){
		
		let target = 1;
		if (select1_1 == target || select1_2 == target){ 
			// seleted
		 	$("#select1_2").removeClass("btn_selected");
		    if (select1_1 == target){
				select1_1 = -1;
			}else{
				select1_2 = -1;
			}
			checkNext0();
		}else{
			// not selected
			if (select1_1 == -1 || select1_2 == -1){
			  //spaceOK	
			$("#select1_2").addClass("btn_selected");
				if (select1_1 == -1){
					select1_1 = target;
				}else{
					select1_2 = target;
				}
				checkNext0();
			}else{
			  //spaceBAD
				
			}
		}
	});
	$("#select1_3").click(function(){
		let target = 2;
		if (select1_1 == target || select1_2 == target){ 
			// seleted
		 	$("#select1_3").removeClass("btn_selected");
		    if (select1_1 == target){
				select1_1 = -1;
			}else{
				select1_2 = -1;
			}
			checkNext0();
		}else{
			// not selected
			if (select1_1 == -1 || select1_2 == -1){
			  //spaceOK	
			$("#select1_3").addClass("btn_selected");
				if (select1_1 == -1){
					select1_1 = target;
				}else{
					select1_2 = target;
				}
				checkNext0();
			}else{
			  //spaceBAD
				
			}
		}
		
	});
	$("#select1_4").click(function(){
		let target = 3;
		if (select1_1 == target || select1_2 == target){ 
			// seleted
		 	$("#select1_4").removeClass("btn_selected");
		    if (select1_1 == target){
				select1_1 = -1;
			}else{
				select1_2 = -1;
			}
			checkNext0();
		}else{
			// not selected
			if (select1_1 == -1 || select1_2 == -1){
			  //spaceOK	
			$("#select1_4").addClass("btn_selected");
				if (select1_1 == -1){
					select1_1 = target;
				}else{
					select1_2 = target;
				}
				checkNext0();
			}else{
			  //spaceBAD
				
			}
		}
	});
	$("#select1_5").click(function(){
		let target = 4;
		if (select1_1 == target || select1_2 == target){ 
			// seleted
		 	$("#select1_5").removeClass("btn_selected");
		    if (select1_1 == target){
				select1_1 = -1;
			}else{
				select1_2 = -1;
			}
			checkNext0();
		}else{
			// not selected
			if (select1_1 == -1 || select1_2 == -1){
			  //spaceOK	
			$("#select1_5").addClass("btn_selected");
				if (select1_1 == -1){
					select1_1 = target;
				}else{
					select1_2 = target;
				}
				checkNext0();
			}else{
			  //spaceBAD
				
			}
		}
		
	});
	$("#select1_6").click(function(){
		let target = 5;
		if (select1_1 == target || select1_2 == target){ 
			// seleted
		 	$("#select1_6").removeClass("btn_selected");
		    if (select1_1 == target){
				select1_1 = -1;
			}else{
				select1_2 = -1;
			}
			checkNext0();
		}else{
			// not selected
			if (select1_1 == -1 || select1_2 == -1){
			  //spaceOK	
			$("#select1_6").addClass("btn_selected");
				if (select1_1 == -1){
					select1_1 = target;
				}else{
					select1_2 = target;
				}
				checkNext0();
			}else{
			  //spaceBAD
				
			}
		}	
		
	});
	$("#btn_mode0next").click(
		function(){
			if (select1_1 != -1 && select1_2 != -1){
				//selectOK
				setmode(1);
			}else{
				//selectBAD
			}
			
		}
	);
	$("#btn_mode1next").click(
		function(){
			if (select2 != -1){
				//selectOK
				setmode(2);
			}else{
				//selectBAD
			}
			
		}
	);
	$("#btn_mode2next").click(
		function(){
			setmode(3);
		}
	);
	$("#btn_mode3next").click(
		function(){
			setmode(4);
		}
	);
	$("#btn_mode4next").click(
		function(){
			setmode(0);
		}
	);
	//----------------------------------------------
	
	
	function checkNext1(){
		console.log("checkNext1");
		// check next btn
		if (select2 != -1){
			//select ok
			$("#btn_mode1next").addClass("btn_enable");


		}else{
			//select bad
			$("#btn_mode1next").removeClass("btn_enable");	
		}
	}
	
	
　$("#select2_1").click(function(){
	let target = select1_1;
	if (select2 == target){
		//selected
		$("#select2_1").removeClass("btn_selected");
		select2 = -1;
		checkNext1();
	}else{
		//not selected
		if (select2 == -1){
			$("#select2_1").addClass("btn_selected");
			select2 = target;
		}else{
			$("#select2_1").addClass("btn_selected");
			$("#select2_2").removeClass("btn_selected");
			select2 = target;
		}
		checkNext1();
	}
});

　$("#select2_2").click(function(){
	let target = select1_2;
	if (select2 == target){
		//selected
		$("#select2_2").removeClass("btn_selected");
		select2 = -1;
		checkNext1();
	}else{
		//not selected
		if (select2 == -1){
			$("#select2_2").addClass("btn_selected");
			select2 = target;
		}else{
			$("#select2_2").addClass("btn_selected");
			$("#select2_1").removeClass("btn_selected");
			select2 = target;
		}
		checkNext1();
	}
});	
	
	
	//----------------------------------------------
	
 $("#renda").click(function(){
	count ++; 
	$("#count").text(count);
 });
	
	$("#tap_count").text(count);
 	
	//----------------------------------------------
	

 
 
});

console.log("end");
