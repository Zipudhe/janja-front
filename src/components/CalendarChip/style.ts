import styled from "styled-components";
import { Link } from '../NavigationMenu/style'


export const CalendarWrapper = styled.div`
  display: flex;
  width: 250px;
  padding: 32px 16px;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  border-radius: 8px;
  background-color: #272323;
`

export const Divider = styled.hr`
  width: 91%;
  border: 1px solid #0593DD;
`

export const CalendarLink = styled(Link)`
font-size: var(--text-md);
color: var(--primary-color);
`

export const EventDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`