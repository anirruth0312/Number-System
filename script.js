"use strict"
function reverse(s)
{
    return s.split("").reverse().join("");
}

function d_to_d(num)
{
	document.getElementById("D_display").value=num;
}


function d_to_b(num)
{
	let new_num="";
	let rem=0;
	while (num != 0) {
		rem = num % 2;
		new_num +=rem.toString();
		num=Math.floor(num/2);
	}	
	new_num=reverse(new_num);
	document.getElementById("B_display").value=new_num;
	return new_num;
}


function d_to_o(num)
{
	let new_num="";
	let rem=0;
	while(num!=0)
	{
		rem=num%8;
		new_num+=rem.toString();
		num=Math.floor(num/8);
	}
	new_num=reverse(new_num);
	document.getElementById("O_display").value=new_num;
	return new_num;
}


function d_to_h(num)
{
	let new_num="";
	let dig=0;
	let rem;
	while(num!=0)
	{
		dig=num%16;
		if(dig==10)
		{
			rem="A";
		}
		else if (dig==11)
		{
			rem="B";
		}
		else if (dig==12)
		{
			rem="C";
		}
		else if (dig==13)
		{
			rem="D";
		}
		else if (dig==14)
		{
			rem="E";
		}
		else if (dig==15)
		{
			rem="F";
		}
		else{
			rem=dig;
		}
		new_num+=rem.toString();
		num=Math.floor(num/16);
	}
	new_num=reverse(new_num);
	document.getElementById("H_display").value=new_num;
	return new_num;
}

function b_to_d(num)
{
	let new_num=0;
	let rem=0;
	let k=1;
	while(num!=0){
		rem=num%10;
		new_num=new_num+(rem*k);
		k=k*2;
		num=Math.floor(num/10);
	}
 	document.getElementById("D_display").value=new_num;
	return new_num;
}

function b_to_o(num)
{
	let temp=0;
	let new_num=0;
	temp=b_to_d(parseInt(num));
	new_num=d_to_o(parseInt(temp));
	document.getElementById("O_display").value=new_num;
}

function b_to_b(num)
{
	let new_num=num;
	document.getElementById("B_display").value=new_num;
}

function b_to_h(num)
{
	let temp=0;
	temp=b_to_d(parseInt(num));
	let new_num=0;
	new_num=d_to_h(temp);
	return new_num;
}


function o_to_d(num)
{
	let new_num=0;
	let k=1;
	let rem=0;
	while(num!=0)
	{
		rem=num%10;
		new_num=new_num+(k*rem);
		k=k*8;
		num=Math.floor(num/10);
	}
	document.getElementById("D_display").value=new_num;
	return new_num;
}

function o_to_o(num)
{
	document.getElementById("O_display").value=num;
}
	

function o_to_b(num)
{
	let temp=0;
	temp=o_to_d(num);
	let new_num=0;
	new_num=d_to_b(temp);
	document.getElementById("B_display").value=new_num;
}


function o_to_h(num)
{
	let temp=0;
	temp=o_to_d(num);
	let new_num="";
	new_num=d_to_h(temp);
	document.getElementById("H_display").value=new_num;
 } 


function h_to_h(num)
{
	document.getElementById("H_display").value=num;
}


function h_to_d(num)
{	
	let new_num=0;
	let i,k=1;
	let val=0;
	let temp=reverse(num);
	let l=num.length;
	for(i=0;i<l;i++)
	{
		if(temp[i]=="A")
		{
			val=10;
		}
		else if (temp[i]=="B")
		{
			val=11;
		}
		else if (temp[i]=="C")
		{
			val=12;
		}
		else if (temp[i]=="D")
		{
			val=13;
		}
		else if (temp[i]=="E")
		{
			val=14;
		}
		else if (temp[i]=="F")
		{
			val=15;
		}
		else{
			val=temp[i];
		}
		new_num=new_num+(val*k);
		k=k*16;
	}
	document.getElementById("D_display").value=new_num;
	return new_num; 
}


function h_to_b(num)
{
	let new_num;
	let temp;
	temp=h_to_d(num);
	new_num=d_to_b(parseInt(temp));
	document.getElementById("B_display").value=new_num;
}

function h_to_o(num)
{
	let new_num;
	let temp;
	temp=h_to_d(num);
	new_num=d_to_o(parseInt(temp));
	document.getElementById("O_display").value=new_num;

}

function calculate() 
{
	let num = document.getElementById("number").value;
	let type = document.getElementById("datatype").value;
	if (num==="") {
		alert("Please enter a number");
		return;
	}
	if(type=="")
	{
		alert("Please choose a datatype");
		return;
	}
	else if (type=="D")
	{
		let arr;
		let i;
		arr=num.split();
		let set=['0','1','2','3','4','5','6','7','8','9'];
 		for(i=0;i<num.length;i++)
		{
			if(num[i] in set)
			{
				continue;
 			}
			else
			{
				alert("Enter values between 0-9 only");
				return;
			}
		}
	}
	else if(type=="O")
	{
		let arr;
		let i;
		arr=num.split();
		let set=['0','1','2','3','4','5','6','7'];
		for(i=0;i<num.length;i++)
		{
			if(num[i] in set)
			{
				continue;
 			}
			else
			{
				alert("Enter values between 0-7 only");
				return;
			}
		}
	}
	else if(type=="B")
	{
		let arr;
		let i;
		arr=num.split();
		let set=['0','1'];
		for(i=0;i<num.length;i++)
		{
			if(num[i] in set)
			{
				continue;
 			}
			else
			{
				alert("Enter binary values between 0-1 only");
				return;
			}
		}
	}
	else if(type=="H")
	{
		let arr;
		let i;
		arr=num.split();
		let set=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		 
		for(i=0;i<num.length;i++)
		{
			 
			 
			if(set.includes(num[i].toString()))
			{
				continue;
 			}
			else
			{
				alert("Enter values between 0-9 and A-F only");
				return;
			}
		}
	}
	
	switch(type){
		case 'D':
			d_to_b(num);
			d_to_o(num);
			d_to_h(num);
			d_to_d(num);
			break;
		case 'B':
			b_to_d(num);
			b_to_o(num);
			b_to_b(num);
			b_to_h(num);
			break;
		case 'O':
			o_to_d(num);
			o_to_b(num);
			o_to_o(num);
			o_to_h(num);
			break;
		case 'H':
			h_to_h(num);
			h_to_d(num);
			h_to_b(num);
			h_to_o(num);
			break;
	}
 
}
var preloader=document.querySelector('.loader');  
        window.addEventListener("load",vanish);
        function vanish(){
           preloader.classList.add('disappear');
        };
function clrscr()
{

	document.getElementById("B_display").value="";
	document.getElementById("D_display").value="";
	document.getElementById("H_display").value="";
	document.getElementById("O_display").value="";
	document.getElementById("number").value="";
	document.getElementById("datatype").value="";
}
 