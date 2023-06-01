//定義一個bullet物件的class

class Bullet{
  constructor(args){
    this.r = this.r || 20 
    this.p = args.p || shipP.copy()   //createVector(width/2,height/2)
    this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(10)
    this.color = args.color || "#fb8b24"
  }
  draw(){
    push()
    translate(this.p.x,this.p.y)
    fill(this.color)
    noStroke()
    //垃圾
    fill(200, 100, 100);
    beginShape();
    vertex(70, 50);
    vertex(45, 75);
    vertex(30, 25);
    vertex(45, 100);
    endShape(CLOSE);
    pop()
  }
  
  update(){ //計算出移動後的位置
    this.p.add(this.v)
  }

}