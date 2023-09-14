export default function Page({ params }) {
    const nameOfPost = params.slug;
    
    return <div>My Post: {params.slug}</div>
  }