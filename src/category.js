import React from "react";
class Category extends React.Component {

    render() {

        return (
            <>

                <div class="categories">
                    <div class="cat-heading">
                        <h1>Categories</h1></div>
                    <div class="post">
                        <h2>Trending Posts</h2>
                    </div>
                    <div class="filter">
                        <span>Filter by category</span>
                    </div>
                    <div class="filter-wrap">
                        <a href="#">
                        <span class="wrap active" >All</span>
                        <span class="wrap">Machine Learning</span>
                        <span class="wrap">Lamp Stack</span>
                        <span class="wrap">Cloud Computing</span>
                        <span class="wrap">Data Backup</span>
                        <span class="wrap">Cyber Security</span> 
                        <span class="wrap">Big Data Analytic</span><br></br><br></br>
                <span class="wrap">Other</span>
                        </a>
                        
            </div>

            </div >
            </ >



        )
    }
}
export default Category;