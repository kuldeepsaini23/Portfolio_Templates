export default {
  name: 'tech',
  title:'Tech',
  type:'document',
  fields:[
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