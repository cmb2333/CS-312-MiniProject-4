import React from 'react';

function Sidebar() {
  return (
    <div className="rightcolumn">
      <div className="card">
        <h2 className="section-title">Album of the Year</h2>
        <img src="/images/TMBTE.jpg" alt="Album of the Year" className="album-cover" />
      </div>
      <div className="card">
        <h2 className="section-title">Top Songs</h2>
        <img src="/images/summoning.jpg" alt="#1" className="song-cover" />
        <img src="/images/DOPOM.jpg" alt="#2" className="song-cover" />
        <img src="/images/koolAid.jpg" alt="#3" className="song-cover" />
        <img src="/images/popularMonster.jpg" alt="#4" className="song-cover" />
        <img src="/images/lost.jpg" alt="#5" className="song-cover" />
      </div>
      <div className="card">
        <h2 className="section-title">Follow Me</h2>
        <div className="follow-links">
          <a href="https://github.com/cmb2333">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
