import React from 'react';
import './Announcement.css'

function Announcement() {
    return (
        <>
        <div className='formsBackEnd'>
        <form method="POST" action="/admin/announcement">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
            <label htmlFor="topic">Topic:</label>
            <input type="text" id="topic" name="topic" /> <br />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" /> <br />
            <button type="submit">Submit</button>
        </form>
        <hr />
        <h1>Select an announcement to Delete</h1>
        <form th:action="@{/admin/deleteAnnouncement}" method="post">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
            <select name="id">
            <option th:each="announcement : ${announcements}" th:value="${announcement.getId()}" th:text="${announcement.getTopic()}">announcement topic
            </option>
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

export default Announcement;