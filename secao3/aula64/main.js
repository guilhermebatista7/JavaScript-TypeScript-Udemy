try{
    console.log('Abrir arquivo');
    console.log('Manipular arquivo');
    //console.log(errooooo);
    console.log('Fechar arquivo');

    try{
        console.log('teste');
    }catch(e){
        console.log('Erro');
    }finally{
        console.log('Também sou executado')
    }
    
}catch(e){
    console.log('Erro');
}finally{
    console.log('Finally: Ainda sou executado');
    console.log('Fechar arquivo');
}