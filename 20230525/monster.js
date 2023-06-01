
var monster_colors ="ffbc42-d81159-8f2d56-218380-73d2de".split("-").map(a=>"#"+a)

class Monster{
    constructor(args){
        this.r = args.r || 100
        this.p = args.p || createVector(random(width),random(height))
        this.v = args.v || createVector(random(1,-1),random(-1,1))
        this.color = args.color || random(monster_colors)
        this.mode = random(["happy","bad"])
        this.dead = false 
        this.timenum=0

    }
    draw() {
      if (this.dead == false) {
        push();
        translate(this.p.x, this.p.y);
        fill(this.color);
        noStroke();
        rectMode(CENTER); // 將正方形設為中間
        rect(0, 0, this.r, this.r); // 畫正方形
        if (this.mode == "happy") {
          fill(255)
          ellipse(0, 0, this.r/2)
          fill(0)
          ellipse(0, 0, this.r/3)
        } else {
          fill(255)
          arc(0, 0, this.r/2, this.r/2, 0, PI)
          fill(0)
          arc(0, 0, this.r/3, this.r/3, 0, PI)
        }
        stroke(this.color);
        strokeWeight(4);
        noFill();
        for (var j = 0; j < 8; j++) {
          rotate(PI/4);
          beginShape();
          for (var i = 0; i < (this.r/2); i++) {
            vertex(this.r/2 + i, sin(i/5 + frameCount/10)*20);
          }
          endShape();
        }
    pop()
    }
    else{ //怪物死亡
      this.timenum=this.timenum+1
     push()
     translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        ellipse(0,0,this.r)
        stroke(255)
        line(-this.r/2,0,this.r/2,0)
        stroke(this.color)
        strokeWeight(4)
        noFill()
        //line(this.r/2,0,this.r,0)
        for(var j=0;j<8;j++){
            rotate(PI/4)
            line(this.r/2,0,this.r,0)
    }
    pop()
  }
  }
    update(){
        this.p.add(this.v)
        //碰壁彈回
        if(this.p.x<=0||this.p.x>=width){ //x軸碰到左邊(<=0)，或是碰到右邊(>=width)
            this.v.x=-this.v.x  //把x軸方向，把速度方向改變
          }
          if(this.p.y<=0||this.p.y>=height){ //y軸碰到上邊(<=0)，或是碰到下邊(>=height)
            this.v.y=-this.v.y  //把y軸方向，把速度方向改變
          }
      }
 isBallInRanger(x,y){ 
  let d =dist(x,y,this.p.x,this.p.y) 
  if(d<this.r/2){
    return true 
  }else{
    return false
  }
}
}
