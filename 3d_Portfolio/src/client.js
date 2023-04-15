import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId:'ugy329vo',
  dataset: 'video',
  apiVersion:'2022-02-01',
  useCdn: true,
  token: 'skPJPHJhAaLdte9clvICoyAdGZ6KKosBxqNZ2lHVd6kLMjgDS8iVTpFltPJqGhi0D6G8Myoo3brR3KVHgsVUVW58l0XSPbLPheUQ4rct7PX1Cofsvbo4aYP6WE3wQ2GiljerP1CEtcVthQd9WtHKWkUHRwEQuKJGzpJiLgt5Zs5TMEsrij3y',
})

const builder  = imageUrlBuilder(client);

export const urlFor = (Source)=> builder.image(Source);