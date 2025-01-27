// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades: 
//- nome 
//- idade 
//- tipo (ex: guerreiro, mago, monge, ninja ) 

let invoice = {
    name: "Helena",
    age: 13,
    heroi: {
        0: ["Guerreiro", "espada"],
        1: ["Mago", "magia"],
        2: ["Elfo", "Arco"],
        3: ["Fada", "mágica de luz"],
        4: ["Monge", "chi"]
    }
}
//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos: 

//- exibir a mensagem: "o {tipo} atacou usando {ataque}") 
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe 
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo: 

//se mago -> no ataque exibir (usou magia) 
//se guerreiro -> no ataque exibir (usou espada) 
//se monge -> no ataque exibir (usou artes marciais) 
//se ninja -> no ataque exibir (usou shuriken) 

generateInvoice (invoice)

function generateInvoice(invoice){
    console.log(`O herói chamado ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)

//Ao final deve se exibir uma mensagem: 
//- "o {tipo} atacou usando {ataque}" 
//ex: mago atacou usando magia 
//guerreiro atacou usando espada 
    for(let index in invoice.heroi){
        let [heroiTipo, heroiAtaque] = invoice.heroi[index]
        console.log(`O ${heroiTipo} atacou usando ${heroiAtaque}`)
    }
}
