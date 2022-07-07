class Now {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Future{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newCode = new Now(value);
        this.tail.next = newCode;
        this.tail = newCode;
        this.length++;
        return this;
    }

    prepend(value){
        const newCode = new Now(value);
        newCode.next = this.head;
        this.head = newCode;
        this.length++;
        return this;
    }

    printList(){
        const act = [];
        let actnow = this.head;
        while(actnow !== null){
            act.push(actnow.value);
            actnow = actnow.next;
        }
        return act;

    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }

        const newload = new Now(value);
        const ace = this.passby(index-1);
        const acehold = ace.next;
        ace.next = newload;
        newload.next = acehold;
        this.length++;
        return this.printList();
    }

    passby(index){
        let pass  = 0;
        let now1 = this.head;
        while(pass !== index){
            now1 = now1.next;
            pass++;

        }
        return now1;
    }

   demove(index){
       const lellow = this.passby(index-1);
       const onco = lellow.next;
       lellow.next = onco.next;
       this.lenght--;
       return this.printList();
   }
}

const futurenow = new Future(11);
futurenow.append(28);
futurenow.append(21);
futurenow.prepend(2);
futurenow.prepend(5);
// futurenow.insert(2, 33);
// futurenow.insert(4,'seven');
// futurenow.demove(3);
futurenow.printList();