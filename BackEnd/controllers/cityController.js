const citycontroller = {
  listarciudades(req,res)=>{res.send("Peticion GET")}
  cargarciudades(req,res)=>{res.send("Peticion POST")}
  borrarciudades(req,res)=>{res.send("Peticion DELETE")}
  modificarcidudades(req,res)=>{res.send("Peticion PUT")}
  
  //CUANDO  LLAMEN A CITYCONTROLER Y USEN ESTE METODO 
  //QUE EJECUTE ESO
}

module.exports = citycontroller
//EL ROUTER DERIVA EL METODO DE LA REQ