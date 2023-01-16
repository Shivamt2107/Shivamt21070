import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from 'react-tooltip';
import "./githubStats.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { Box } from "@material-ui/core";
import { FaCode, FaGit, FaGithub } from "react-icons/fa";

import { BiUserVoice } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  //   const { Themes, currentTheme } = useContext(ThemeContext)
  return (
    <div id="githubID">
      <h1 className="heading">
        My <span className="heading-highlight">Github</span> Stats
      </h1>

      <div className="stats_container">

        <img src="https://github-profile-trophy.vercel.app/?username=Shivamt2107&theme=algolia" alt="Shivamt2107" data-aos="flip-left" />

      </div>
      {/* Contribution status */}
      <div data-aos="zoom-in-up">
        <GitHubCalendar
          style={{ margin: "auto", marginBottom: "30px" }}
          blockSize={18}
          fontSize={21}
          blockMargin={4}
          blockRadius={6}
          username="Shivamt2107"
        // transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={15} html />
        </GitHubCalendar>





      </div>


      {/* 
      <div className="github_profile_stats">
        
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Shivamt2107&theme=2077" alt="Shivamt2107" data-aos="flip-right" />

        <img src="https://github-readme-activity-graph.cyclic.app/graph?username=shivamt2107&bg_color=0d0d0d&color=c4c4c4&line=2ff4dd&point=c5c4c4&area=true&hide_border=true" alt="Shivamt2107" data-aos="flip-left" />

      </div> */}
      {/* <div className="GithubTag">
          <div>
            <h2>1200+ Hours Practical Coding</h2>
            <h2>300+ Hours Practical Coding</h2>
            <h2>100+ Hours Practical Coding</h2>
          </div>
          <div>
            <h2>12+ Project</h2>
            <h2>70+ Mini Project</h2>
            <h2>136+ Git Commits</h2>
          </div>
      </div> */}

    </div>
  );
};

export default GitHubStats;