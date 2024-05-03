import React from 'react';
import './EmailListing.css'

function EmailListing() {
    return (
        <>
        <div className='formsBackEnd'>
        <form method="POST" action="/admin/emailListing">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" /> <br /> {/* Добавлен атрибут name="email" */}
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" /> <br /> {/* Добавлен атрибут name="subject" */}
            <label htmlFor="body">Body:</label>
            <input type="text" id="body" name="text" /> <br /> {/* Изменён атрибут name на "text" */}
            <button id="submit" type="submit">Send</button>
        </form>
        <h1>emailListing Status</h1>
        <p th:if="${message}" th:text="${message}">Default message if none exists.</p>
        <hr />
        <p><a th:href="@{/admin/}" href="/admin/">Admin Home</a></p>
        </div>

        </>
    );
}

export default EmailListing;