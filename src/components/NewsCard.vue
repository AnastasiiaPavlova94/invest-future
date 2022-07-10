<template>
     <div class="blog">
          <div class="blog_post">
            <div>
              <img src="../assets/img/post1.jpg"
                alt="post1"
              />
            </div>
            <div class="blog_post_content">
              <h5>Mar 30, 2022</h5>
              <h4>modern vibes bedrooms, todays trending design</h4>
              <p>
                Consequat, volutpat morbi tempor elit tellus, ante in mattis.
                Facilisi morbi ipsum dui aliquet...
                <span>Read More</span>
              </p>
            </div>
          </div> 
          <div class="blog_post">
            <div>
              <img src="../assets/img/post2.jpg"
                alt="post3"
              />
            </div>
            <div class="blog_post_content">
              <h5>Mar 29, 2022</h5>
              <h4>How to make minimalist living rooms pop-out</h4>
              <p>
                Consequat, volutpat morbi tempor elit tellus, ante in mattis.
                Facilisi morbi ipsum dui aliquet...
                <span>Read More</span>
              </p>
            </div>
          </div>
          <div class="blog_post">
            <div>
              <img src="../assets/img/post3.jpg"
                alt="post3"
              />
            </div>
            <div class="blog_post_content">
              <h5>Mar 27, 2022</h5>
              <h4>how to make your resort that looks outstanding</h4>
              <p>
                Consequat, volutpat morbi tempor elit tellus, ante in mattis.
                Facilisi morbi ipsum dui aliquet...
                <span>Read More</span>
              </p>
            </div>
          </div>
        </div>
</template>

<script>

import axios from "axios";
export default {
	name: "NewsCard",
	data() {
		return {
		NewsData: [],
		};
	},
	created() {
		axios
		.get("../data/new.json").then((resp) => {
			this.NewsData = resp.data;
		});
	},
};
</script>