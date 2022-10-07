import React from "react";
import Link from "next/link";

const PopularBlogPost = () => {
  return (
    <>
      <div className="blog-area pt-70">
        <div className="container">
          <div className="section-title">
            <h2>Popular Blog Post</h2>
            <p>
              We are try to Update with Latest Article and Blog Post Best
              Strategic Planning
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image blog_first">
                  <Link href="/blog">
                    <a>
                      <img
                        src="/images/blog/fastech-ecommercewebsitetrend (1).webp"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>
                      <Link href="/blog">
                        <a className="tag">Ecommerce</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog">
                      <a>Top 9 eCommerce Website Trends to Follow in 2022</a>
                    </Link>
                  </h3>

                  <Link href="/blog">
                    <a className="blog-btn">
                      Read More <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link href="/blog">
                    <a>
                      <img
                        src="/images/blog/fastech-Metaverse (1).webp"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>
                      <Link href="/blog">
                        <a className="tag">Metaverse</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog">
                      <a>What is Metaverse and how does it work? </a>
                    </Link>
                  </h3>

                  <Link href="/blog">
                    <a className="blog-btn">
                      Read More <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link href="/blog">
                    <a>
                      <img src="/images/blog/fastech-blog-3.webp" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>
                      <Link href="/blog">
                        <a className="tag">Marketing</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog">
                      <a>
                        Branding Involves Developing the Strategy to Create a
                        Point.
                      </a>
                    </Link>
                  </h3>

                  <Link href="/blog">
                    <a className="blog-btn">
                      Read More <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="blog-shape-1">
          <img src="/images/blog/fastech-shape-1.webp" alt="image" />
        </div>
        <div className="blog-shape-2">
          <img src="/images/blog/fastech-shape-2.webp" alt="image" />
        </div>
      </div>

      {/* Blog Card Style */}
      <style jsx>{`
        .blog_first {
          border: 1px solid #ecf1f9;
        }
        .blog-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
          margin-top: 100px;
        }
        .single-blog {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          margin-bottom: 30px;
        }
        .single-blog .blog-content {
          margin-top: 30px;
        }
        .single-blog .blog-content .entry-meta {
          padding-left: 0;
          margin-bottom: 0;
        }
        .single-blog .blog-content .entry-meta .tag {
          display: inline-block;
          background-color: #eaf0ff;
          color: var(--main-color);
          font-size: 14px;
          font-weight: 500;
          padding: 5px 15px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-blog .blog-content .entry-meta .tag:hover,
        .single-blog .blog-content .entry-meta .tag a:hover {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-blog .blog-content .entry-meta li {
          list-style-type: none;
          display: inline-block;
          color: #79798d;
          font-size: 14px;
          font-weight: 400;
          margin-right: 15px;
          position: relative;
          padding-left: 18px;
        }
        .single-blog .blog-content .entry-meta li:last-child {
          margin-right: 0;
        }
        .single-blog .blog-content .entry-meta li:first-child {
          padding-left: 0;
        }
        .single-blog .blog-content .entry-meta li i {
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          color: #36cc72;
          font-size: 14px;
        }
        .single-blog .blog-content h3 {
          font-size: 22px;
          margin-top: 20px;
          margin-bottom: 15px;
          line-height: 1.5;
        }
        .single-blog .blog-content h3 a {
          color: var(--black-color);
        }
        .single-blog .blog-content .blog-btn {
          font-size: var(--font-size);
          font-weight: 500;
          position: relative;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-blog .blog-content .blog-btn i {
          position: absolute;
          right: -20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          font-size: 15px;
        }
        .single-blog:hover .blog-content h3 a {
          color: var(--main-color);
        }

        .single-blog:hover .blog-content .blog-btn {
          letter-spacing: 1px;
        }
        .blog-shape-1 {
          position: absolute;
          top: 10%;
          right: 2%;
          -webkit-transform: translateY(-10%) translateX(-2%);
          transform: translateY(-10%) translateX(-2%);
        }
        .blog-shape-2 {
          position: absolute;
          top: 10%;
          left: 2%;
          -webkit-transform: translateY(-10%) translateX(-2%);
          transform: translateY(-10%) translateX(-2%);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-blog .blog-content {
            margin-top: 20px;
          }
          .single-blog .blog-content h3 {
            font-size: 20px;
            margin-top: 15px;
            margin-bottom: 10px;
          }
          .single-blog .blog-content .blog-btn {
            font-size: 14px;
          }
          .single-blog .blog-content .entry-meta .tag {
            font-size: 12px;
            padding: 5px 8px;
          }
          .single-blog .blog-content .entry-meta li {
            font-size: 12px;
            margin-right: 5px;
            padding-left: 20px;
          }
          .blog-shape-1 {
            display: none;
          }
          .blog-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single-blog .blog-content .entry-meta .tag {
            font-size: 12px;
            padding: 5px 8px;
          }
          .single-blog .blog-content .entry-meta li {
            font-size: 12px;
            margin-right: 5px;
            padding-left: 20px;
          }
          .blog-shape-1 {
            display: none;
          }
          .blog-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-blog .blog-content .entry-meta .tag {
            font-size: 12px;
            padding: 5px 8px;
          }
          .single-blog .blog-content .entry-meta li {
            font-size: 12px;
            margin-right: 5px;
            padding-left: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default PopularBlogPost;
