
import React from 'react';

export default function Navbar(){
    return (
        <div class="input-group rounded mb-3">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <img src="./search.png" alt="" width="25px" height="25px" />
        </div>
    );
};
