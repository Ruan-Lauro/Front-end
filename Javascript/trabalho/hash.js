var hash = (string, max) =>{
    var hash = 0;
    for(var i = 0; i < string.length; i++){
        hash += string.charCodeAt(i);
    }

    return hash % max;
}

let HashTable = function(){
    let storage = [];
    const storagelimit = 10;

    this.print = function(){
        console.log(storage);
    }

    this.add = function(key, value){
        var index = hash(key, storagelimit);
        if(storage[index] == undefined){
            storage[index] = [[key,value]];
        }
        else{
            var inserted = false;
            for(var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][0] = value;
                    inserted = true
                }
            }

            if(inserted === false){
                storage[index].push([key, value]);
            }
        }
    }
}

var h = new HashTable();
h.add("Plesiosaurus gurgitis", "St. Croix")
h.add("Triceratops horridus", "Lance Creek")
h.add("Plesiosaurus dolichodeirus", "Lyme Regis")
h.add("Tyrannosaurus rex","Hell Creek")
h.add("Triceratops Calicornis","Lance Creek")
h.print();

//2) São 6 índices, sendo 1 primário e 5 secundário