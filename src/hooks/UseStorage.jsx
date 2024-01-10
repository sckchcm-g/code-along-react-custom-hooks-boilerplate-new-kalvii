import { useEffect ,useState} from 'react'

function Storage(initialVal, updatedVal) {
  const get = () => {
    const feed = JSON.parse(localStorage.getItem(initialVal)) || JSON.parse(sessionStorage.getItem(initialVal));
    return feed || updatedVal;
  };
  const [content, SetContent] = useState(get());

  useEffect(() => {
    localStorage.setItem(initialVal, JSON.stringify(content));
    sessionStorage.setItem(initialVal, JSON.stringify(content));
  }, [initialVal, content]);
  return [content, SetContent];
}

export default Storage;