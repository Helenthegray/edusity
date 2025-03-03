import React, {useEffect, useState} from 'react'
import './Navbar.css'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className= { `container ${sticky? 'dark-nav' : ''}`}>
        <img className='logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEUAAAD////Z2dnc3Nzf39/h4eFlZWVubm5TU1Pm5ubGxsZ6enrV1dU+Pj7v7+9oaGgtLS3MzMybm5uwsLCUlJSnp6cAdUiHh4e5ublNTU2Ojo5dXV1WVlYZGRm/v785OTkhISEaGhr09PTxOiv4WVGayrufx7NOWqwAIZIBKJgODg5ISEg7OzuqqqozDQl8HxhcFxIOAAW6HAreOCs9Dwt2opP/19X0PzLxMiImAAAAPzAAflUqknHd6OL+i4bMTkieiSYphlWFvqw4IQD7uBE7iVIjimKJjcZJUpTR1+sfNJwAFI8AABsdFhoABnYAJY0ACywAE1EADTr71fvQAAAFSUlEQVR4nO3ZCZOiRhgGYOhjFHFUrqDiqGOuHV2zuTbHbjab+z528/9/TL5uFBpRl3GgrJj3qakaaHHol4Y+GMsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAxn3w5MmH565Dkz76+G3yyafnrkcFt1EUXd//a08/+/wLlfHL+mtUt4Ft2/17f+vZ869efP0OedlAlWqmEl7d+1vffPv8re/eVRqoUs1OS/j9DxRRa6BKNTuxDX+kNnxPSfeTpOZq1ei0hM+e//Ti5/fJL3r32hF116s+pyW0nv762++PyB96byxYzdWq0YkJ//zr0d3d3d+v0r0pv7yElvXq9et/NptLyc6YMAn9sLUsFY9iKr6x7pew7cZuf1Au9/nZEs6ndspbFau0SIvZxLrJE3q2zY2DrumTSb6bDIUURLJgpPZbjpTqys1DJhhjUnH8G0c648K5uHSCJrJprp0L8+K5kxdHVp6wY9td49sqYTvbCyRnnAtOzeXooaElmL4egSOojD4j0rcCzsw/Yl1JJkeNBuyGceipjezKLnUDTsexr8rDRaWEHcojOlHoD7syPWib0I38IUX0lahlTSiR0fLWkHOvqYAzqqEz05sD1WrbG1Xl2px0qbNXSBgJJqabJ3CVTmO3CYkrjOfQY9y4K5ecieJdWyNm24tsx85q37bNIF6lhG1ZqLZ2KOE4L08/kvMHxTisXegkfdpL20Blys95WylhsKezPJTwhprbzfamnA8fFOOIId2j+d4g62xoo2Mc5lVIqCpdutUOJaTLwbMTDOipbD0oxhE92zZvLNW5qN8j2nCN8rBCQtUfllbJBxNOjKPHosGRkupnXr3epvoxlc+M8qsKCame5Zn1wYSqr/G3m5xHDwlxjKrfopejXV3LiDbM41YVEkaclXv8wwljsR0SV9Scq90v1iWxS6QqD3YSziokNJ+szOGES+o/0xHFb3Aw1HefU6RPFphjiFWYlx5LOC2d4HBCdXzagXaZiGtJs09ijPGmdeU2XJ3ahrqvmae/xe2J9X+z2U6fuRVWfg6TLKG/M9fUjiSkDkaPLusGB0NL96X75vTuTtse7kvdLCF1HbK0ADuWMBb6+ePb57EZTmHEzwzMSbhVGA+nm85oY50lTOhuK60hjyW8oWyPrb7c0/Q1UvO0fW/AaC1hVkfkCXe62V4+a6PFUel2O5aQnlwRqsfX3/1WnZZUwd6e8qgwX20b89K4cE302muT0KfbdPdqGQmpseSs8GFbUt/E9syEaqUa0Xx8Nv2OSm5vX0XMF0ZCvdzaHj2yjYRzmnnzfB2r/6iRkGafu61Fk5m+2NMD16ur6hgkVJ95ErKsQVVT2b7qxQd0EWS+AtazcEf3DSOatzNjfdiS1CDRiv7UrO+nWY2EVodvBr7sJY6a1zQ5GBo1zmXNE6T7uvkWFs8Tzs3De+pBzNb4rnqJIaWgH55OxMyENDVn1H16Mn9a9bub8huwusULo8r5FDjOyrpL1YNmXfpAZp9M9RI6fx/R7kiuXtJwLtKnq+WIvOd1Kbh6T5MnXPPyorkRrSHvLXpONygOTGOPSuVQBehHa2N8vNLHs/VjVe1obfYfE3/odb3O2k2nKatwbLzdGvhTr9sxzqLmNSe9h/3PCPfNgy5Kt9S9XpikNERemuG+Bdclufh+ZkajStPzmbNJrmejkIb7y30K1b+g1PSnyYXheanJjZCdxv7ddH5u6PvjyZuPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+H/5F5vMRVB4lXXbAAAAAElFTkSuQmCC'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li> <button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
