"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/mystyle.css';
import Breadcrumb from '@/Components/Breadcrumb';
import BlogCard from "@/Components/BlogCard";
import blogImage from '@/assets/imgs/blogCard/blogcard.jpg'; 
import BlogPage from "@/Components/BlogPage";
import FindAgent from '@/Components/FindAgent';
import ScrollToTopButton from "@/Components/ScrollToTopButton";
export default function BlogsPage() {
    return (
        <>
            <Breadcrumb/> 
                <div className='container' >
                <div className="row">
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            </div><br></br><br></br>
            <div className="row">
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            </div><br></br><br></br>
            <div className="row">
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            <BlogCard 
                imageSrc={blogImage}  // Image source
                category="Real estate"  // Category
                date="26 August, 2024"  // Date
                title="Building gains into housing stocks and how to trade the..."  // Title
                link="#"  // Link for the "Read More"
            />
            </div>
            </div><br></br><br></br>
            <BlogPage/><br></br><br></br>
    <FindAgent/>
    <div >
      <ScrollToTopButton />
    </div>
        </>
    )
}