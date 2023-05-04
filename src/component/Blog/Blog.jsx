import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h2> the differences between uncontrolled and controlled components.</h2>
            <p>answer:1.Data Handling: As mentioned, in uncontrolled components, the form data is handled by the DOM, whereas in controlled components, it's handled by the component's state.<br/>
2.state Management: Since uncontrolled components don't store the form data in their state, they don't require any state management. Controlled components, on the other hand, require state management to store the form data and to update the component when the form data changes.<br/>
3.Accessing Form Data: In uncontrolled components, to get the value of the form input fields, you would need to use a ref. In controlled components, you can access the form data directly from the component's state.<br/>
4.Validation and Submission: In uncontrolled components, validation and submission of form data needs to be done manually. Controlled components, on the other hand, can perform validation and submission using the component's state and props.
</p>
<h2>validate React props using PropTypes</h2>
<p>React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.

We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.</p>
            <h2>difference between nodejs and express js.</h2>
           
            <p>Node.js and Express.js are both important technologies in the world of web development, but they serve different purposes. Node.js is a JavaScript runtime environment that allows developers to build server-side applications using JavaScript, while Express.js is a framework built on top of Node.js that simplifies the process of building web applications.</p>
            <h2>What is a custom hook, and why will you create a custom hook?</h2>
            <p>In React, a custom hook is a function that uses React's built-in hooks (such as useState, useEffect, useContext, etc.) to encapsulate common functionality that can be reused across multiple components. Custom hooks allow you to abstract away complex logic into a reusable function, making it easier to manage and share code between different parts of your application.</p>
        </Container>
    );
};

export default Blog;