import React from "react";
import Notification from "./Notification";

const ETH = () => {
  return (
    <div className="flex flex-col md:flex-row space-between">
      {/* LEFT */}
      <div className="bg-white p-4 space-y-2">
        <p>ETHOnline 2022</p>

        <Notification />

        <div>
          <div>
            <span>logo</span>
            <span>Dashboard</span>
          </div>

          <div>
            <span>logo</span>
            <span>Project</span>
          </div>
        </div>
      </div>
      {/* Center */}
      <div className="bg-white p-4 space-y-2">
        <div>
          <p>👋 Welcome, Anish</p>
          <p>This is where you edit your project, team, and hacker profile.</p>
        </div>
        <div>
          <p>Stake Return</p>
          {/* START GreenBox Component */}
        </div>
        <div>
          {/* Start Sponsor/info Start Component */}
          <span>image</span>
          <p>Web3 Weekend 2022</p>
          <p>Nov 18th - Nov 20th</p>
          {/* END Sponsor/info Start Component */}
        </div>

        <div>
          <div>
            <p>Web3 Jobs</p>
            <span>New</span>
          </div>
          <p>
            Looking for new opportunities? We&aposve granted you and your team
            early access to create a profile and get access to the best web3
            companies!
          </p>
          {/* Button component */}
          <button>Create my profile</button>
        </div>
        <div>
          <p>Project</p>
          <div>
            <span>Image</span>
            <div>
              <p>Pixel</p>
              {/* Pill component */}
              <div>
                <span>tick</span>
                <span>Video</span>
              </div>
              <p>
                A tool allows you to create cool pixelated art over mint as NFT
                on Cronos blockchain
              </p>
              <div>
                <span>logo</span>
                <span>View project</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Submission Countdown</p>
          {/* GreenBox Component */}
        </div>

        <div>
          <p>Judging</p>
          {/* GreenBox Component */}
        </div>

        <div>
          <div>
            <p>Guides</p>
            {/* Button component */}
          </div>
          <p>Explore and learn more about web3 with our interactive guides.</p>
          <div>
            <button>OPTIMISM</button>
            <p>Intoduction to Optimism</p>
            {/* Box component */}
            <div>
              <span>Begin Guide</span>
              <span>logo</span>
            </div>
          </div>
        </div>
        <div>
          <p>Team</p>
          <div>
            <div>logo</div>
            <div>
              <span>Anish Jain</span>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="bg-white p-4 space-y-2">
        <Notification />
      </div>
    </div>
  );
};

export default ETH;
