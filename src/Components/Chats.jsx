import React from 'react';

export default function Chats() {
    return (
        <>
            <div className="col-md-6 col-lg-7 col-xl-8">
                <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>
                    <div className="d-flex flex-row justify-content-start">
                        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                            alt="friend 1 Avatar" width='45px' height='100%'></img>
                        <div>
                            <p class="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#e0e1dd' }}>Lorem ipsum
                                dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore
                                magna aliqua.</p>
                            <p class="small ms-3 mb-3 rounded-3  float-end text-warning">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                    <div class="d-flex flex-row justify-content-end">
                        <div>
                            <p class="small p-2 me-3 mb-1 text-black rounded-3 bg-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt reiciendis tempora voluptate, vel ea.</p>
                            <p class="small me-3 mb-3 rounded-3 text-warning">12:00 PM | Aug 13</p>
                        </div>
                        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="user Avatar" width="45px" height="100%"></img>
                    </div>
                </div>
                <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="user Avatar" width='40px' height='100%'></img>
                    <input type="text" class="form-control form-control-lg" placeholder="Type message" />
                </div>
            </div>
        </>
    );
};
