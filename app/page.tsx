"use client";
import React, { useState } from "react";
import EmptyPage from "./pages/Empty";
import Rows from "./components/Rows";
import styled from "styled-components";
export default function Home() {
  return <Center>Choose Platform</Center>;
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  font-size: 28px;
  font-weight: 700;
  color: #757474;
`;
