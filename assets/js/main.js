/* 
Descrizione: Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
 */

const { createApp } = Vue

  createApp({
    data() {
      return {

        checkEmpty : false,

        newThing : "",

        list : [
            {
                text : 'comprare l\'acqua',
                done : false
            },
            {
                text : 'andare dal fruttivendolo',
                done : false
            },
            {
                text : 'dare da bere alle piante',
                done : true
            },
            {
                text : 'preparare una torta',
                done : false
            },
            {
                text : 'visitare un castello',
                done : false
            },
            {
                text : 'portare fuori il cane',
                done : true
            },
        ]

    }
    },
    methods : {
        removeItem(index) {
            this.list.splice(index,1);
            console.log(this.list);
        },

        addThing(newThing){

            if (newThing !== "") {
                
                this.list.unshift({text : newThing , done : false});

                this.newThing = ''

                this.checkEmpty = false;
                
            } else{

                this.checkEmpty = true;

            }

            console.log(newThing);
            console.log(this.list);
        },
    
    }
  }).mount('#app')