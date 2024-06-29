// contentfulService.ts
import client from '../cfclient';

export const fetchPosts = async () => {
  
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost', // Replace 'post' with your content type ID
    });

    return entries.items;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};
