class _Rectangle { //class object
    
    private _width // private property of class object
    private _height // -//-

    constructor(w,h){
        this._width=w
        this._height=h
    }

    public get width(){
        return this._width
    }

    public set width(value){
        if(value <= 0){
            this._width=1
        }else{
            this._width=value
        }
    }

    calcArea(){
        return this._width * this._height
    }

    calcPerimeter(){
        return(this._height + this._width) * 2
    }
}

const _rec=new _Rectangle(5,10)
_rec.width=-1