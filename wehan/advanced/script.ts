class Vehicles {
    // models: Array<string>;
    color: string;
    description: string;
    img:string;
    models: string;
    
    

constructor (color:string, description:string,img:string,models: string){
        // super(properties,methods);
        this.color = color;
        this.description = description;
        this.img= img;
        this.models = models;
        
        
        
        array.push(this);
    }
    printFullinfo(){
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${this.description}<br> ${this.color}<br> ${this.models}</p>
        </div>
      </div>`
    }
}

class Information extends Vehicles{
    constructor(color:string, description:string,img:string,models: string,public speed:number,public kilometer:number){
        super(color,description,img,models);
    }
    printFullinfo(){
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${this.description}<br> ${this.color}<br> ${this.models}<hr>${this.speed}</p>
          <button id="calc" class="btn btn-success"> Price</button>
          <div id="test"></div>
        </div>
      </div>`
    }
    calculation (){
        return this.kilometer  / this.speed;
    }
        
}





let array : Array<Vehicles> = [];

new Vehicles ("blue","Oldie", "car.webp", "this is an oldi");
new Vehicles ("blue","Oldie", "car.webp", "this is an oldi");
new Vehicles ("blue","Oldie", "car.webp" ,"this is an oldi");
let test = new Information ("blue","Oldie", "car.webp", "this is an oldi",300,3000);
for(let val of array){
(document.getElementById("result")as HTMLElement).innerHTML += val.printFullinfo();
}
(document.getElementById("calc") as HTMLElement).addEventListener("click",function(){
    (document.getElementById("test")as HTMLElement).innerHTML+=
test.calculation();
}) ;