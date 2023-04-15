import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'video_project',

  projectId: 'ugy329vo',
  dataset: 'video',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
