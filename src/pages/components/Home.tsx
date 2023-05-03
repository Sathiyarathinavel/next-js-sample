import Link from "next/link"
import { useRouter } from "next/router"

const Home = () => {

    const router=useRouter();

    const routeFun=()=>{
        // router.push('/products');
        router.replace('/products')
    }

  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/components/SampleReact">
        <h1>SampleReactPage</h1>
      </Link>
      <button onClick={routeFun}>Route to Products</button>
    </div>
  )
}

export default Home
