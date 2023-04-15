export default {
  name: 'navbar',
  title:'Navbar',
  type:'document',
  fields:[
    {
      name:'name',
      title:'Name',
      type:'string'
    },
    
    {
      name:'title',
      title:'Title',
      type:'string'
    },
    
    {
      name:'imgUrl',
      title:'ImgUrl',
      type:'image',
      options:{
        hotspot:true,
      },
    },
   
  ]
}