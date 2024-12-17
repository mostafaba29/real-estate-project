import '../assets/styles/components/reviewSection.style.scss';

export default function ReviewSection (){
    return (
        <div className="comments-section">
        <h2>Comment (4)</h2>
        <div className="comment">
            <img src="../assets/imgs/avatars/avatar1.jpg" alt="Viola Lucas" className="profile-pic" />
            <div className="comment-body">
                <div className="comment-header">
                    <div className="comment-info">
                    <h3>Viola Lucas</h3>
                    <span>August 13, 2023</span>
                    </div>
                    <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                </div>
                <p>
                    It&apos;s really easy to use and is exactly what I am looking for. A lot of
                    good-looking templates & it&apos;s highly customizable. Live support is
                    helpful, solved my issue in no time.
                </p>
                <div className="comment-images">
                    <img src="../assets/imgs/houses/house1.jpg" alt="house image 1" />
                    <img src="../assets/imgs/houses/house2.jpg" alt="house image 2" />
                    <img src="../assets/imgs/houses/house3.jpg" alt="house image 3" />
                </div>
                <div className="comment-actions">
                    <button><i className="fa fa-thumbs-up"></i> Useful</button>
                    <button><i className="fa fa-thumbs-down"></i> Not helpful</button>
                </div>
            </div>
        </div>
        <div className="comment">
            <img src="../assets/imgs/avatars/avatar1.jpg" alt="Viola Lucas" className="profile-pic" />
            <div className="comment-body">
                <div className="comment-header">
                    <div className="comment-info">
                    <h3>Viola Lucas</h3>
                    <span>August 13, 2023</span>
                    </div>
                    <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                </div>
                <p>
                    It&apos;s really easy to use and is exactly what I am looking for. A lot of
                    good-looking templates & it&apos;s highly customizable. Live support is
                    helpful, solved my issue in no time.
                </p>
                <div className="comment-actions">
                    <button><i className="fa fa-thumbs-up"></i> Useful</button>
                    <button><i className="fa fa-thumbs-down"></i> Not helpful</button>
                </div>
            </div>
        </div>
        <div className="comment">
            <img src="../assets/imgs/avatars/avatar1.jpg" alt="Viola Lucas" className="profile-pic" />
            <div className="comment-body">
                <div className="comment-header">
                    <div className="comment-info">
                    <h3>Viola Lucas</h3>
                    <span>August 13, 2023</span>
                    </div>
                    <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                </div>
                <p>
                    It&apos;s really easy to use and is exactly what I am looking for. A lot of
                    good-looking templates & it&apos;s highly customizable. Live support is
                    helpful, solved my issue in no time.
                </p>
                <div className="comment-actions">
                    <button><i className="fa fa-thumbs-up"></i> Useful</button>
                    <button><i className="fa fa-thumbs-down"></i> Not helpful</button>
                </div>
            </div>
        </div>
        <button className="btn-outline">View all comment</button>
    
        <div className="leave-comment">
          <h2>Leave A Comment</h2>
          <form>
            <div className="form-header">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name*" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email*" required />
                  </div>
            </div>
            <div className="check-group">
              <input type="checkbox" />
              <label>
                 Save your name, email for the next time review
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea id="comment" placeholder="Your comment" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Post Comment</button>
          </form>
        </div>
      </div>
    )
}