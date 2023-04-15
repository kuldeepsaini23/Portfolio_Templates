export default {
  name: 'experience',
  title:'Experience',
  type:'document',
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string'
    },
    {
      name:'companyName',
      title:'CompanyName',
      type:'string'
    },
    
    {
      name:'iconBg',
      title:'IconBg',
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
    {
      name: 'points',
      title: 'Points',
     type:'array',
     of: [
       {
         name:'point',
         title:'Point',
         type:'string'
       }
     ]
    },

    {
      name:'date',
      title:'date',
      type:'string'
    },
  ]
}