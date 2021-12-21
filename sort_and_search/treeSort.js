class Tree{
    array = []
    constructor(array)
        {
            this.array = array
        }
    show(){
        console.log(this.array)
    }
    handleNode(k , length){
        if(2*k+1 < length ){
            if(this.array[2*k+1]>this.array[k]){
                let tmpNode =this.array[k]
                this.array[k] =this.array[2*k+1]
                this.array[2*k+1] = tmpNode
            }
            this.handleNode(2*k +1,length )
        }

        if(2*k+2<length){
            if(this.array[2*k+2]>this.array[k]){
                let tmpNode =this.array[k]
                this.array[k] =this.array[2*k+2]
                this.array[2*k+2] = tmpNode
            }
            this.handleNode(2*k +2, length)
        }
        
    }
    sort(){
        for(let i = this.array.length;i>0;i--){
            for(let j =0;j<Math.log2(this.array.length);j++) //тут делаем регуларным
            {
                this.handleNode(0,i)
            }
            let tmpNode = this.array[0]
            this.array[0] = this.array[i-1]
            this.array[i-1]= tmpNode
            
        }        
    }

}
let tree1 = new Tree([4,7,1,9,0,5,2,8,6])
tree1.sort()

tree1.show()