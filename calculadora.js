





calcRanking = function calcRanking(vit, der){
    return vit-der
}

listRank = function listRank(calcRanking){
    if(calcRanking <= 10){
        return "FERRO"
    }else if(calcRanking>=11 && calcRanking<=20){
        return "Bronze"
    }else if(calcRanking>=21 && calcRanking<=50){
        return "PRATA"
    }else if(calcRanking>=51 && calcRanking<=90){
        return "OURO"
    }else if(calcRanking>=81 && calcRanking<=90){
        return "DIAMANTE"
    }else if(calcRanking>=91 && calcRanking<=100){
        return "LENDARIO"
    }else{
        return "IMORTAL"
    }
}



let vit = prompt(`numero de vitorias`)
let der = prompt(`numero de derrotas`)

console.log(`o hERÓI TEM DE SALDO ${(calcRanking(vit,der))} e ele está no nivel ${listRank(calcRanking(vit,der))}`)
