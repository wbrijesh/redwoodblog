import { Link, routes } from '@redwoodjs/router'
import Navbar from 'src/components/Navbar'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
