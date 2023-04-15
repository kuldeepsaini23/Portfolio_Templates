export default {
  name: 'projects',
  title:'Projects',
  type:'document',
  fields:[
    {
      name:"sectionDescription",
      title:"Section Description",
      type:"string"
    },
    {
      name:'title',
      title:'Title',
      type:'string'
    },
    {
      name:'projectDescription',
      title:'Project Description',
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
      name: 'tags',
      title: 'Tags',
     type:'array',
     of: [
       {
         name:'tag',
         title:'Tag & its Color(TagName ColorName->Write Like this)',
         type:'string'
       },
       
     ]
    },

    {
      name:'source_code_link',
      title:'Github Link(only for coders)',
      type:'string'
    },

    {
      name:'liveLink',
      title:'Live Link',
      type:'string'
    },
  ]
}