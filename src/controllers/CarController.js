const car = require("../mocks/car-list.json")

module.exports = {
  index(req,res){
    res.json(car)
  },

  maisModelos(req,res){
    let max = 0
    let model

    car.filter((item)=> {
      if(item.models.length > max){
        max = item.models.length
        model = item.brand
      }  
    });
    return res.json(model)
  },

  menosModelos(req,res){
    let cars = car.sort((a,b) => a.models.length > b.models.length ? 1 : -1)[0];

    res.json(cars.brand)
  },

  listaMaisModelos(req,res){
    let {number} = req.params
    let cars = car.sort((a,b)=>{
      return a.models.length < b.models.length ? 1 : -1
    })

    let top = []

    for (let i = 0; i < number; i++) {
      top.push(cars[i]);
    }
    
    top = top.sort((a,b) => {
      return a.brand > b.brand || a.models.length < b.models.length ?  1 : -1
      }).map((item) => {
        return{
          marca: item.brand,
          model: item.models.length
        }
      })


    res.json(top)
    
  },

  listaMenosModelos(req,res){
    let {number} = req.params

    let cars = car.sort((a,b)=>{
      return a.models.length > b.models.length ? 1 : -1
    });
    
    let less = []
    
    for (let i = 0; i < number; i++) {
      less.push(cars[i]);
    }
    
    less = less.sort((a,b) => {
      return a.brand > b.brand || a.models.length > b.models.length ?  1 : -1
      }).map((item) => {
        return{
          marca: item.brand,
          model: item.models.length
        }
      })

      res.json(less)
    },
    
    findByBrand(req,res){
      let {nomeMarca} = req.body;
      
      let brandCar =  car.filter((item)=>(
        item.brand.toLowerCase().includes(nomeMarca.toLowerCase())
        )).map((item)=> { return {modelos: item.models}})
    
      if(brandCar)
        return res.json({brandCar})
    },


      sorted(req,res){
        let cars = car.sort((a,b)=>{
          return a.models.length > b.models.length ? 1 : -1
        })
        console.log(cars);
      },
    }