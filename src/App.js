import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');
  
  useEffect(()=>{
    console.log("API Key:", process.env.REACT_APP_PIXABAY_API_KEY);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`).then(res => res.json()).then(data => {
      setImage(data.hits); setIsloading(false);
    }).catch(error => console.log(error))
  },[]);
  return (
    <div className="container auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
}


export default App;
