class Rectangle{ // class object

    width; // property of class object
    height; // property of class object
    
    constructor(w, h){ // constructor or interface of class object
        this.width=w;
        this.height=h;
    }

    calcArea(){ // method of class object
        return this.width * this.height
    }

    calcPerimeter(){
        return(this.width+this.height)*2
    }
}

const rec= new Rectangle(5,10)
rec.calcArea()