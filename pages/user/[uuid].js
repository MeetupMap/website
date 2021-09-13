import 'tailwindcss/tailwind.css';
import axios from 'axios';

export default function Home(props) {
    
}

export const getStaticProps = async () => {
    const getData = await axios ({
      method: 'GET',
      url: 'http://localhost:4000/graphql',
      data: {
        query: `
          query {
            user(userID: "1") {
              id
            }
          }
        `
      }
    });
  
    const data = getData.data
    
    return {
      props: {
        data
      }
    }
  }