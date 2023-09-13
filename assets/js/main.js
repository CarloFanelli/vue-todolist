/* 
Descrizione: Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
 */

const { createApp } = Vue

  createApp({
    data() {
      return {
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
                done : false
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
                done : false
            },
        ]

    }
    }
  }).mount('#app')

