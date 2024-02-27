export default function Sidebar() {
    return (
      <>
        <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
          <div className="p-3">
            <div data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px",backgroundColor:'#778da9'}}>
              <ul className="list-unstyled mb-0">
                <li className="p-2 border-bottom">
                  <a href="#friend1" className="d-flex justify-content-between">
                    <div class="d-flex flex-row">
                      <div>
                        <img
                          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                          alt="avatar" class="d-flex align-self-center me-3" width="50"></img>
                        <span class="badge "></span>
                      </div>
                      <div class="pt-1">
                        <p class="fw-bold mb-0">Friend 1</p>
                        <p class="small text-muted">Last msg here ...</p>
                      </div>
                    </div>
                    <div class="pt-1">
                      <p class="small text-muted mb-1">5 mins ago</p>
                      <span class="badge bg-danger rounded-pill float-end">1</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }