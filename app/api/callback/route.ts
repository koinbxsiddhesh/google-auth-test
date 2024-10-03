// @ts-nocheck
export const revalidate = 60;

// Handle GET requests
export async function GET(req) {
  console.log(`Method called: ${req.method}`);
  
  let data = await fetch('https://api.vercel.app/blog');
  let posts = await data.json();
  
  return Response.json(posts);
}

// Handle POST requests
export async function POST(req) {
  console.log(`Method called: ${req.method}`);
  
  const newPost = await req.json();
  console.log('New post data:', newPost);
  // Logic to save the new post can go here
  return Response.json({ message: 'Post created', data: newPost }, { status: 201 });
}

// Handle PUT requests
export async function PUT(req) {
  console.log(`Method called: ${req.method}`);
  
  const updatedPost = await req.json();
  console.log('Updated post data:', updatedPost);
  // Logic to update the post can go here
  return Response.json({ message: 'Post updated', data: updatedPost });
}

// Handle DELETE requests
export async function DELETE(req) {
  console.log(`Method called: ${req.method}`);
  
  const { id } = await req.json();
  console.log(`Post with id ${id} deleted`);
  // Logic to delete the post can go here
  return Response.json({ message: 'Post deleted' });
}

// Handle unsupported methods
export async function OPTIONS(req) {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}
