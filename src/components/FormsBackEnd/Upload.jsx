import React from 'react';
import './Upload.css'

function Upload(props) {
    return (
        <>
        <div className='formsBackEnd'>
        <h1>Item Upload Form</h1>
        <form method="POST" encType="multipart/form-data" action="/admin/upload">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
            <label>Name: <input type="text" name="name" /></label><br />
            <label>Local Name: <input type="text" name="localName" /></label><br />
            <label>Price: <input type="number" step="0.01" name="price" /></label><br />
            <label>Amount: <input type="number" name="amount" /></label><br />
            <label>File: <input type="file" name="file" /></label><br />
            <input type="submit" defaultValue="Submit" />
        </form>
        <hr />
        <h1>Select an Item to Delete</h1>
        <form th:action="@{/admin/deleteItem}" method="post">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
            <select name="id">
            <option th:each="item : ${items}" th:value="${item.getId()}" th:text="${item.getName()}">Item name</option>
            </select>
            <button type="submit">Delete Item</button>
        </form>
        <hr />
        <h1>Operation status</h1>
        <p th:if="${message}" th:text="${message}">Default message if none exists.</p>
        <hr />
        <p><a th:href="@{/admin/}" href="/admin/">Admin Home</a></p>
        </div>
        </>
    );
}

export default Upload;