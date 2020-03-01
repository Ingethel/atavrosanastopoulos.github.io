import React from "react";
import {
  FaHome,
  FaCode,
  FaEnvelope,
  FaLinkedinIn,
  FaGithubAlt,
  FaExpand,
  FaCompress
} from "react-icons/fa";

export const iconLibrary: { [key: string]: any } = {
  home: <FaHome></FaHome>,
  code: <FaCode></FaCode>,
  github: <FaGithubAlt></FaGithubAlt>,
  linkedin: <FaLinkedinIn></FaLinkedinIn>,
  mail: <FaEnvelope></FaEnvelope>,
  expand: <FaExpand></FaExpand>,
  colapse: <FaCompress></FaCompress>
};
