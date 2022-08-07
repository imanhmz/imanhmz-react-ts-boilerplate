import {RouteObject} from "react-router-dom";
import Home from "../pages/home";
import React from "react";
import Dashboard from '../layouts/dashboard'

// let routes: RouteObject[] = [
//     {
//         path: "/",
//         element: <Dashboard />,
//         children: [
//             { index: true, element: <Home /> },
//             {
//                 path: "/courses",
//                 element: <Courses />,
//                 children: [
//                     { index: true, element: <CoursesIndex /> },
//                     { path: "/courses/:id", element: <Course /> },
//                 ],
//             },
//             { path: "*", element: <NoMatch /> },
//         ],
//     },
// ];

const Index = () => {
    return (
        <p>
            asd
            </p>
    )
}
export default Index
// function NoMatch() {
//     return (
//         <div>
//             <h2>It looks like you're lost...</h2>
//     <p>
//     <Link to="/">Go to the home page</Link>
//     </p>
//     </div>
// );
// }