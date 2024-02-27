import React from 'react';
import Navbar from "./Navbar"
import Chats from './Chats';
import Sidebar from './Sidebar';
export default function Home() {
    return (
        <>
            <section className='vh-100'>
                <div className="container py-5 h-100">
                    <div className="card" style={{ borderRadius: "15px;",backgroundColor:'#415a77'}}>
                        <div className="card-body">
                            <div className="row">
                                <Navbar />
                                <Sidebar />
                                <Chats />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}