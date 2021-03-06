class Node {
    constructor(value) {
        this.value = value;
        this.next = null;     
    }

}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;//empty linkedList
        for (let i = 0; i < arguments.length; i++) {
            if (this.length === 0){//if list is empty
                this.tail = new Node(arguments[i]);
                this.head = this.tail;  
            }
            else {
                this.tail.next = new Node(arguments[i]);
                this.tail = this.tail.next;    
            }
           this.length++; 
        }
    }
    
    // adds element or elements at the end of the list
    push(){
        for (let i = 0; i < arguments.length; i++) {
            if (this.length === 0){//if list is empty
                this.tail = new Node(arguments[i]);
                this.head = this.tail;  
            }
            else {
                this.tail.next = new Node(arguments[i]);
                this.tail = this.tail.next;    
            }
           this.length++; 
        }
    }
    
    
    get(number){
        var bufNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === number){
                return bufNode.value;
            }
            bufNode = bufNode.next;
        } 
    }
    
    // set an element to specific position
    set(number, newValue){
       var bufNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === number){
            bufNode.value = newValue;
            }
            bufNode = bufNode.next;
        } 
    }
    
    // removes last element from the list
    pop(){
        var bufNode = this.head;
        for (let i = 0; i < this.length - 2; i++){//-2 так как необходим предпоследний Node списка
            bufNode = bufNode.next;
        }     
        var popValue = bufNode.next.value;
        bufNode.next = null;
        this.length = this.length -1;
        this.tail = bufNode;
        return popValue;
    }
    
    // removes first element from the list
    shift(){
        var shiftValue = this.head.value;
        this.head = this.head.next;
        this.length = this.length -1;
        return shiftValue;
    }
    
    // returns boolean
    contains(smth){
        var bufNode = this.head;
        var checker = false;
        for (let i = 0; i < this.length; i++) {
            if (bufNode.value === smth) checker = true;
            bufNode = bufNode.next;
        }
        return checker;
    }
    
    // reverse list and returns it
    reverse(){
        var bufNode = this.head;
        var bufArray = [];
        for (let i = 0; i < this.length; i++) {
            bufArray[i] = bufNode.value;
            bufNode = bufNode.next;
        }
        var bufArrayReversed = [];
        for (let i = 0; i < this.length; i++){
            bufArrayReversed[i] = bufArray[this.length - 1 - i];
        }
        const reversedList = new LinkedList();
        for (let i = 0; i < this.length; i++){
           reversedList.push(bufArrayReversed[i]);
        }
        return reversedList;
    }
    
    // adds element or elements at the beginning of the list
    unshift(){
        for (let i = arguments.length -1; i >=0; i--){
            if (this.length === 0){//if list is empty
                this.tail = new Node(arguments[i]);
                this.head = this.tail;  
            }
            else {
                var bufNode = new Node(arguments[i]);
                bufNode.next = this.head;
                this.head = bufNode;   
            }
           this.length++; 
        }
    }
    
    

    
    // forEach on list
    forEach(callback){
        var element = null;
        for(let i = 0; i< this.length; i++){
            element = this.get(i);
            console.log(callback(element, i));
        }
    }
   

    // returns string representation of a list
    toString(){
        var bufNode = this.head;
        var str = "\[";
        for (let i = 0; i < this.length; i++) {
            if (typeof(bufNode.value) == "object"){
                str +="{}";
            }
            else if (typeof(bufNode.value) == "string"){
                str +="\""+bufNode.value+"\"";
            }
            else{
                str +=bufNode.value;
            }
            
            if (i == this.length - 1){
                str +="\]";
            }
            else {
                str +=",";
            }
            bufNode = bufNode.next;
        }
        console.log(str);
        return str;
    }
    
    
}

module.exports = LinkedList;

#   f r o n t e n d _ h o m e w o r k s  
 