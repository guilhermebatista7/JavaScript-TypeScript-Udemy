function retornaData(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

const data = new Date();

try{
    console.log(retornaData(data));
}catch(e){
    console.log(e);
}finally{
    console.log('Finalizando')
}