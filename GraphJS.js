class Graph {
  constructor(name, data, positive, lagless, colorcart = 'rgba(255,0,0,1)', opacitycart = 1, colorbg = 'rgba(255,0,0,1)', opacitybg = 0.25, colorline = 'rgba(30,76,255,1)', opacityline = 1.5) {
    this._name = name;
    this._data = data;
    this._positive = positive;
    this._lagless = lagless;
    this._colorcart = colorcart;
    this._opacitycart = opacitycart;
    this._colorbg = colorbg;
    this._opacitybg = opacitybg;
    this._colorline = colorline;
    this._opacityline = opacityline;
	
    frame(document.getElementById(name), this._data, this._positive, this._lagless, this._colorcart, this._opacitycart, this._colorbg, this._opacitybg, this._colorline, this._opacityline);
    return;
  }
}

function frame(element, data, positive, lagless, colorcart, opacitycart, colorbg, opacitybg, colorline, opacityline) {
  var width = document.body.clientWidth;
  var height = document.body.clientHeight-3;
  
  element.width = width;
  element.height = height;
  
  var left = [];
  var bottom = [];
  
  for (var i = 0;i<data.length;i++) {
      left.push(Object.values(data[i])[0]);
  }
  
  for (var i = 0;i<data.length;i++) {
      bottom.push(Object.keys(data[i])[0]);
  }
  
  var risultante = height-6*height/100;
  var risultante2 = width-5*width/100;
  
  var ctx = element.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = colorcart;
  ctx.lineWidth = opacitycart;
  
  ctx.moveTo(2.5*width/100, h((96*height/100-risultante/left.length*0.5)/data.length*(data.length+1)));
  ctx.lineTo(2.5*width/100, h(5*height/100));
  ctx.stroke();
  
  ctx.lineWidth="2";
  
  ctx.moveTo(2.5*width/100, h(5*height/100));
  ctx.lineTo(97.5*width/100, h(5*height/100));
  ctx.stroke();
  
  ctx.beginPath();
  ctx.strokeStyle = colorbg;
  ctx.lineWidth = opacitybg;
  
  var rows = Math.max.apply(Math, left)+1;
  
  var per = 1;
  var prima = 1;
  
  while (true) {
    if (Math.max.apply(Math, left)/2 >= prima && Math.max.apply(Math, left)/2 < prima*10) {
	  per = prima;
    new_l = [];
    for (var i = 0;i<left.length;i++) {
      new_l.push(left[i]/per);
    }
	rows = ((rows-1)/per+1);
	left = new_l;
	  break;
	}
    prima = prima * 10;
  }
  
  var hey = bottom.length/rows;

  
  // 6 default; 9 for padding/margin [top]
  for (var i = 0;i<rows-1;i++) {
    ctx.moveTo(2.5*width/100, h((risultante/rows)*(i+1)+5*height/100));
    ctx.lineTo(97.5*width/100-risultante2/data.length*(0.5), h((risultante/rows)*(i+1)+5*height/100));
    ctx.stroke();
  }
  
  /*for (var i = 0;i<bottom.length-1;i++) {
    ctx.moveTo(risultante2/(bottom.length+0)*(i+1)+2.5*width/100, h(5*height/100));
    ctx.lineTo(risultante2/(bottom.length+0)*(i+1)+2.5*width/100, h(96*height/100-risultante/left.length*0.5+risultante/data.length*(0.5)));
    ctx.stroke();
  }*/
  
  // lines
  var init_bottom;
  var init_left;
  ctx.beginPath();
  ctx.strokeStyle = colorline;
  ctx.lineWidth = opacityline;
  
  if (lagless) {
  
  var ii = 0;
  dee = setInterval(function(){
    ctx.moveTo(init_left, h(init_bottom));
    ctx.lineTo(risultante2/(bottom.length)*(ii+0)+2.5*width/100, h((risultante/rows)*(left[ii])+5*height/100));

	init_left = risultante2/(bottom.length)*(ii+0)+2.5*width/100;
	init_bottom = (risultante/rows)*(left[ii])+5*height/100;
    ctx.stroke();
	ii++;
	if (ii == data.length) {
	  clearInterval(dee);
	}
  }, 1);
  
  } else {
  
  for (var i = 0;i<data.length;i++) {
    ctx.moveTo(init_left, h(init_bottom));
    ctx.lineTo(risultante2/(bottom.length)*(i+0)+2.5*width/100, h((risultante/rows)*(left[i])+5*height/100));

	init_left = risultante2/(bottom.length)*(i+0)+2.5*width/100;
	init_bottom = (risultante/rows)*(left[i])+5*height/100;
    ctx.stroke();
  }
  
  }
  
  // left values
  for (var i = 0;i<rows;i++) {
    ctx.font = "18px Arial";
    ctx.fillText([i]*per,1.25*width/100-ctx.measureText([i]).width/2, h((risultante/rows)*(i)+5*height/100-9));
  }
  
  // bottom time
  var whois = 0;
  for (var i = 0;i<data.length;i++) {
    whois++;
	if (whois >= hey) {
    ctx.save();
    ctx.translate((risultante2/(bottom.length+0)*(i)+2.5*width/100)-ctx.measureText(bottom[i]).width/2,h(2.5*height/100));
	ctx.rotate(15*Math.PI/180);
    ctx.font = "18px Arial";
    ctx.fillText(bottom[i],0,0);
	ctx.restore();
	whois = 0;
	}
  }
  
}

function h(num) {
  var height = document.body.clientHeight-3;
  return height/2-(num-height/2);
}