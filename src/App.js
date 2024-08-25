import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";
function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');
  
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`).then(res => res.json()).then(data => {
      setImage(data.hits); setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }).catch(error => console.log(error))
  },[term]);
  return (
    <div className="container auto">
    <ImageSearch searchText={(text)=> setTerm(text)}/>
    {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-40">Images not found</h1>}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4 mx-48">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}


export default App;
